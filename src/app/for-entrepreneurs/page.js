import DiscoveryLevels from '@/components/DiscoveryLevels';
import BonusBox from '@/components/BonusBox';
import { CheckList, FeasibilityBlock, ApplyCTA } from '@/components/AudienceSection';

export const metadata = { title:'For Entrepreneurs — New Opportunity in Your City', description:'We help you reach new customers in your city.' };

export default function Page() {
  return (
    <DiscoveryLevels levels={[
      { label:'For Entrepreneurs', title:<>New opportunity <em className="text-gold italic">in your city.</em></>, summary:'We help you reach new customers in your city — by offering a discount and a bonus.', cta:'Show Me How' },
      { label:"Who's Who", title:'You are an individual entrepreneur.', content:(<div className="max-w-3xl mx-auto text-center"><p className="text-[14px] text-surface-secondary leading-relaxed mb-4">You provide services or products. You conduct business individually, organize, manage, and assume the risks of a business to create economic value.</p><p className="text-[12px] text-surface-muted italic">Note: Activation, federation, and coordinator work belong to <a href="/career-opportunities/success-liaison/" className="text-gold no-underline hover:underline">Success Liaisons</a> — not the Entrepreneur. The Entrepreneur's role is to offer real value to members.</p></div>), cta:'Show Me What I Do' },
      { label:'How', title:'Three things you do.', content:(<CheckList items={['Join MundusPASS.net — the international network of services and products','Offer your products or services at a 15–25% discount to members','Add an optional Bonus — to drive participation and excitement']} />), cta:'Show Me The Bonus' },
      { label:'The Bonus', title:<>Add a Bonus <em className="text-gold italic">on top of your discount.</em></>, content:(<BonusBox />), cta:'Show Me The Feasibility' },
      { label:'Feasibility · Apply', title:<>Real growth. <em className="text-gold italic">Real next step.</em></>, content:(<>
        <FeasibilityBlock items={[{value:'1',label:'Discount Offer'},{value:'+1',label:'Optional Bonus'},{value:'Local',label:'Member Reach'},{value:'Repeat',label:'Engagement Pattern'}]} />
        <p className="text-[12px] text-surface-secondary text-center mt-5 max-w-2xl mx-auto mb-7">As more merchants, organizations, and members participate, more opportunities emerge — for partnerships, promotions, events, visitor activity, Passport to the World, and development.</p>
        <div className="max-w-3xl mx-auto bg-gold/[0.06] border-2 border-gold/30 rounded-2xl p-6 text-center"><ApplyCTA href="/apply/entrepreneur/" label="Apply as Entrepreneur" /></div>
      </>) },
    ]} />
  );
}
