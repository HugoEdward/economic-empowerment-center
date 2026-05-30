'use client';
import { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

const STATUS_BADGES = {
  not_uploaded: { label: 'Not Uploaded', cls: 'bg-navy-950 text-surface-muted border-surface-border', icon: '○' },
  uploaded: { label: 'Uploaded', cls: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20', icon: '✓' },
  pending_review: { label: 'Pending Review', cls: 'bg-gold-dim text-gold border-gold/20', icon: '⏳' },
};

const DocumentChecklist = forwardRef(function DocumentChecklist({ requirements }, ref) {
  const [files, setFiles] = useState({});

  const handleFile = useCallback((category, file) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) { alert('File exceeds 10MB limit.'); return; }
    setFiles(prev => ({ ...prev, [category]: { file, status: 'uploaded' } }));
  }, []);

  const removeFile = useCallback((category) => {
    setFiles(prev => { const n = { ...prev }; delete n[category]; return n; });
  }, []);

  const requiredDocs = requirements.filter(r => r.required);
  const optionalDocs = requirements.filter(r => !r.required);
  const uploadedRequired = requiredDocs.filter(r => files[r.category]);
  const missingRequired = requiredDocs.filter(r => !files[r.category]);
  const isComplete = missingRequired.length === 0;

  // Expose data to parent
  useImperativeHandle(ref, () => ({
    getDocuments: () => Object.entries(files).map(([category, data]) => ({ file: data.file, category })),
    isComplete: () => isComplete,
    getMissing: () => missingRequired.map(r => r.label),
  }));

  return (
    <div className="space-y-4">
      {/* Completeness indicator */}
      <div className={`rounded-lg px-4 py-2.5 text-xs border ${isComplete ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-gold-dim border-gold/20 text-gold'}`}>
        {isComplete ? (
          <span>✓ All required documents received. Application may be submitted for review.</span>
        ) : (
          <span>⚠ {missingRequired.length} required document{missingRequired.length > 1 ? 's' : ''} missing. Upload to complete your application.</span>
        )}
      </div>

      {/* Required */}
      <div>
        <p className="text-[9px] font-bold tracking-widest uppercase text-gold mb-2">Required Documents ({uploadedRequired.length}/{requiredDocs.length})</p>
        <div className="space-y-1.5">
          {requiredDocs.map(r => (
            <DocRow key={r.category} req={r} fileData={files[r.category]} onUpload={handleFile} onRemove={removeFile} isRequired />
          ))}
        </div>
      </div>

      {/* Optional */}
      {optionalDocs.length > 0 && (
        <div>
          <p className="text-[9px] font-bold tracking-widest uppercase text-surface-muted mb-2">Optional Documents</p>
          <div className="space-y-1.5">
            {optionalDocs.map(r => (
              <DocRow key={r.category} req={r} fileData={files[r.category]} onUpload={handleFile} onRemove={removeFile} />
            ))}
          </div>
        </div>
      )}

      {/* Missing summary */}
      {!isComplete && (
        <div className="bg-red-500/5 border border-red-500/15 rounded-lg px-4 py-2.5 text-[10px] text-red-400/80">
          <p className="font-medium mb-1">Missing required documents:</p>
          {missingRequired.map(r => (
            <p key={r.category} className="flex items-center gap-1.5 py-0.5">
              <span className="text-[8px]">✕</span> {r.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
});

function DocRow({ req, fileData, onUpload, onRemove, isRequired }) {
  const status = fileData ? 'uploaded' : 'not_uploaded';
  const badge = STATUS_BADGES[status];

  return (
    <div className="bg-navy-950/50 border border-surface-border rounded-lg px-3 py-2.5 flex items-center gap-3">
      {/* Status badge */}
      <span className={`text-[8px] px-1.5 py-0.5 rounded-full border font-medium flex-shrink-0 ${badge.cls}`}>
        {badge.icon}
      </span>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5">
          <p className="text-[10px] font-medium truncate">{req.label}</p>
          <span className={`text-[7px] font-bold uppercase tracking-wide ${isRequired ? 'text-gold' : 'text-surface-muted'}`}>
            {isRequired ? 'Required' : 'Optional'}
          </span>
        </div>
        {fileData ? (
          <p className="text-[9px] text-emerald-400/80">Received: {fileData.file.name} ({Math.round(fileData.file.size / 1024)}KB)</p>
        ) : (
          <p className="text-[9px] text-surface-muted">{req.desc}</p>
        )}
      </div>

      {/* Actions */}
      {fileData ? (
        <button onClick={() => onRemove(req.category)} className="text-[9px] text-red-400/60 hover:text-red-400 flex-shrink-0">Remove</button>
      ) : (
        <label className="flex-shrink-0 cursor-pointer">
          <span className="text-[9px] text-gold hover:underline">Upload</span>
          <input type="file" accept=".pdf,.jpg,.jpeg,.png,.webp" className="hidden"
            onChange={e => { if (e.target.files[0]) onUpload(req.category, e.target.files[0]); e.target.value = ''; }} />
        </label>
      )}
    </div>
  );
}

export default DocumentChecklist;
