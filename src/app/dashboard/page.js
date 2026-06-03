import DiscoveryLevels from '@/components/DiscoveryLevels';

export const metadata = {
  title: 'Your Dashboard — Control Panel Preview',
  description: 'Preview of the Control Panel that recognized organizations, merchants, sponsors, and coordinators will use.',
};

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      {
        label: 'Control Panel · Preview',
        title: <>Your <em className="text-gold italic">Control Panel.</em></>,
        summary: 'After recognition, every audience receives a dashboard, a pathway, a next step, and a progress journey. Not just information — guided action.',
        cta: 'Show Me What It Looks Like',
      },
      {
        label: 'The Four Pillars',
        title: <>Every dashboard <em className="text-gold italic">has four parts.</em></>,
        content: (
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            <DashCard
              icon="📊"
              title="Your Dashboard"
              desc="Members · Merchants · Sponsors · Revenue floor · Phase indicators · live activity"
            />
            <DashCard
              icon="🛤️"
              title="Your Pathway"
              desc="Where you are in the S.E.E.D. journey. Recognized → Activated → Sustaining → Growing."
            />
            <DashCard
              icon="➜"
              title="Your Next Step"
              desc="One clear action at a time. Recruit a merchant. Activate a Passport pavilion. File quarterly report."
            />
            <DashCard
              icon="📈"
              title="Your Progress"
              desc="Visible milestones. Cohorts joined. Cities reached. Revenue activated. Real numbers, real time."
            />
          </div>
        ),
        cta: 'Show Me When This Activates',
      },
      {
        label: 'When',
        title: <>Activates with <em className="text-gold italic">your recognition.</em></>,
        content: (
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[14px] text-surface-secondary leading-relaxed mb-4">
              The Control Panel activates for each audience as they are recognized through the S.E.E.D. program. Authentication, profile, and live data come online together with Stripe Connect provisioning.
            </p>
            <p className="text-[12px] text-surface-muted leading-relaxed mb-6 italic">
              This is a preview. The dashboard architecture is in development for the first cohorts.
            </p>
            <a href="/apply/" className="btn-gold inline-block">Apply for Consideration</a>
            <p className="text-[10px] text-surface-muted mt-4">
              Already recognized? Sign-in will activate here in the next release.
            </p>
          </div>
        ),
      },
    ]} />
  );
}

function DashCard({ icon, title, desc }) {
  return (
    <div className="bg-navy-800 border border-gold/20 rounded-2xl p-5">
      <div className="text-2xl mb-2" aria-hidden>{icon}</div>
      <p className="font-display text-sm font-medium text-surface-primary mb-2">{title}</p>
      <p className="text-[11px] text-surface-secondary leading-relaxed">{desc}</p>
    </div>
  );
}
