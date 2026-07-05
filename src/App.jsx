import { useState, useRef, useEffect } from "react";

const NAVY  = "#0D1B3E";
const TEAL  = "#1A9E8F";
const AMBER = "#F4A623";
const RUST  = "#C0392B";
const GREEN = "#1A6B3A";
const GOLD  = "#B7860B";
const GREY  = "#F0F4F8";
const WHITE = "#FFFFFF";
const MID   = "#64748B";

function TASSLogo({ size = "md", theme = "light" }) {
  const s = { sm:{the:9,main:18,sub:16,tag:9,rW:16,rH:1.5,gap:2}, md:{the:11,main:24,sub:22,tag:11,rW:22,rH:2,gap:3}, lg:{the:14,main:32,sub:29,tag:13,rW:28,rH:2,gap:4} }[size]||{the:11,main:24,sub:22,tag:11,rW:22,rH:2,gap:3};
  const navy=theme==="dark"?"#fff":NAVY, tag=theme==="dark"?"rgba(255,255,255,0.5)":"#6B7FA3", tagB=theme==="dark"?"rgba(255,255,255,0.75)":"#3D4F6B";
  return (
    <div style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:s.gap,userSelect:"none"}}>
      <div style={{display:"flex",alignItems:"center",gap:7}}>
        <div style={{width:s.rW,height:s.rH,background:TEAL,borderRadius:99}}/><span style={{color:TEAL,fontSize:s.the,fontWeight:800,letterSpacing:"0.25em",textTransform:"uppercase",lineHeight:1}}>THE</span><div style={{width:s.rW,height:s.rH,background:TEAL,borderRadius:99}}/>
      </div>
      <div style={{color:navy,fontSize:s.main,fontWeight:900,letterSpacing:"-0.01em",textTransform:"uppercase",lineHeight:1,marginTop:-1}}>APPRENTICESHIP</div>
      <div style={{color:TEAL,fontSize:s.sub,fontWeight:900,letterSpacing:"-0.01em",textTransform:"uppercase",lineHeight:1,marginTop:-3}}>SUCCESS SYSTEM™</div>
      <div style={{width:"70%",height:s.rH,background:TEAL,borderRadius:99}}/>
      <div style={{color:tag,fontSize:s.tag,letterSpacing:"0.16em",textTransform:"uppercase",fontWeight:400,marginTop:1}}>Stop Guessing.{" "}<strong style={{fontWeight:800,color:tagB}}>Start Securing.</strong></div>
    </div>
  );
}

const TABS = [
  {id:"home",      icon:"🏠", label:"Home"},
  {id:"what",      icon:"🎓", label:"What is GA"},
  {id:"compare",   icon:"⚖️",  label:"GA vs MA"},
  {id:"frameworks",icon:"📋", label:"Frameworks"},
  {id:"ready",     icon:"✅", label:"Am I Ready"},
  {id:"apply",     icon:"📝", label:"Apply"},
  {id:"mjs",       icon:"🏛️",  label:"MyJobScot"},
  {id:"cv",        icon:"📄", label:"CV"},
  {id:"star",      icon:"⭐", label:"STAR"},
  {id:"interview", icon:"🎤", label:"Interview"},
  {id:"struggling",icon:"💙", label:"If Struggling"},
  {id:"coaching",  icon:"🧭", label:"Coaching"},
  {id:"coach",     icon:"🤖", label:"AI Coach"},
];

function PageHeader({icon,title,subtitle}){
  return (
    <div style={{marginBottom:22}}>
      <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
        <span style={{fontSize:22}}>{icon}</span>
        <h2 style={{color:NAVY,fontSize:20,fontWeight:900,margin:0,letterSpacing:"-0.02em"}}>{title}</h2>
      </div>
      <div style={{height:3,width:40,background:AMBER,borderRadius:2,marginBottom:8}}/>
      {subtitle&&<p style={{color:MID,fontSize:13,lineHeight:1.6,margin:0}}>{subtitle}</p>}
    </div>
  );
}

function Card({children,style={}}){
  return <div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:12,padding:16,marginBottom:12,boxShadow:"0 1px 4px rgba(0,0,0,0.04)",...style}}>{children}</div>;
}

function InfoBox({text,type="tip"}){
  const s={tip:{bg:"#FFFBEB",border:AMBER,col:"#92400E"},info:{bg:"#EFF6FF",border:TEAL,col:"#1A5276"},success:{bg:"#F0FDF4",border:GREEN,col:"#14532D"},warning:{bg:"#FEF2F2",border:RUST,col:"#7F1D1D"},gold:{bg:"#FFFBEB",border:GOLD,col:"#78350F"}}[type]||{bg:"#FFFBEB",border:AMBER,col:"#92400E"};
  return <div style={{background:s.bg,borderLeft:`4px solid ${s.border}`,borderRadius:8,padding:"10px 13px",marginBottom:14}}><p style={{color:s.col,fontSize:13,lineHeight:1.65,margin:0}}>{text}</p></div>;
}

function Accordion({items,accent=TEAL}){
  const [open,setOpen]=useState(null);
  return (
    <div>{items.map((item,i)=>(
      <div key={i} style={{background:WHITE,border:`1px solid ${open===i?accent:"#E2E8F0"}`,borderRadius:10,overflow:"hidden",marginBottom:8,boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
        <button onClick={()=>setOpen(open===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"13px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"inherit"}}>
          <span style={{color:NAVY,fontWeight:700,fontSize:14,textAlign:"left"}}>{item.title}</span>
          <span style={{color:accent,fontSize:18,flexShrink:0}}>{open===i?"−":"+"}</span>
        </button>
        {open===i&&<div style={{padding:"0 15px 15px",borderTop:"1px solid #F0F4F8"}}><div style={{paddingTop:12}}>{typeof item.content==="string"?<p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{item.content}</p>:item.content}</div></div>}
      </div>
    ))}</div>
  );
}

function ExampleToggle({weak,strong,weakLabel="✗ Weak",strongLabel="✓ Strong"}){
  const [show,setShow]=useState(null);
  return (
    <div>
      <div style={{display:"flex",gap:8,marginBottom:10}}>
        <button onClick={()=>setShow(show==="weak"?null:"weak")} style={{flex:1,padding:"9px 8px",background:show==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:show==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{show==="weak"?"Hide":weakLabel}</button>
        <button onClick={()=>setShow(show==="strong"?null:"strong")} style={{flex:1,padding:"9px 8px",background:show==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:show==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{show==="strong"?"Hide":strongLabel}</button>
      </div>
      {show==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Weak — vague, no evidence</p><p style={{color:"#7F1D1D",fontSize:13,lineHeight:1.7,margin:0,fontStyle:"italic",whiteSpace:"pre-line"}}>{weak}</p></div>}
      {show==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Strong — specific, evidenced</p><p style={{color:"#14532D",fontSize:13,lineHeight:1.75,margin:0,whiteSpace:"pre-line"}}>{strong}</p></div>}
    </div>
  );
}

function NavTabBar({options,active,onSelect}){
  return (
    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
      {options.map((opt,i)=>{
        const id=typeof opt==="object"?opt.id:opt, label=typeof opt==="object"?opt.label:opt, isActive=active===id;
        return <button key={i} onClick={()=>onSelect(id)} style={{background:isActive?NAVY:WHITE,color:isActive?WHITE:MID,border:`1px solid ${isActive?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:isActive?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase",letterSpacing:0.3,whiteSpace:"nowrap"}}>{label}</button>;
      })}
    </div>
  );
}

// HOME
function HomeModule({setTab}){
  const cards=[
    {id:"what",      icon:"🎓",title:"What is a GA?",          desc:"Earn while you learn — a degree, a salary and real experience, simultaneously"},
    {id:"compare",   icon:"⚖️", title:"GA vs MA",              desc:"The honest side-by-side comparison most people never see"},
    {id:"frameworks",icon:"📋",title:"15 Frameworks",          desc:"Every GA pathway in Scotland — universities, employers, entry requirements"},
    {id:"ready",     icon:"✅",title:"Am I Ready?",            desc:"An honest self-assessment before you commit to the dual demands"},
    {id:"apply",     icon:"📝",title:"How to Apply",           desc:"Step-by-step from first search to offer — including the timeline"},
    {id:"mjs",       icon:"🏛️", title:"MyJobScotland",         desc:"Public sector GA roles — Scottish Government, NHS, councils"},
    {id:"cv",        icon:"📄",title:"CV and Covering Letter",  desc:"Weak vs strong examples for GA applications — school leaver and career changer"},
    {id:"star",      icon:"⭐",title:"STAR Examples",          desc:"Four GA-level worked examples — more demanding than standard MA interviews"},
    {id:"interview", icon:"🎤",title:"Interview Prep",         desc:"Competency, technical and sector-specific questions with model answers"},
    {id:"struggling",icon:"💙",title:"If You Struggle",        desc:"What to do when the workload becomes unmanageable — honest guidance"},
    {id:"coaching",  icon:"🧭",title:"Coaching Prompts",       desc:"Three-stage reflective framework — pre-application, during, post-completion"},
    {id:"coach",     icon:"🤖",title:"AI Coach",               desc:"Personalised guidance for your specific situation — any question, any stage"},
  ];
  return (
    <div>
      <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,borderRadius:14,padding:"32px 20px 20px",display:"flex",flexDirection:"column",alignItems:"center",gap:12,marginBottom:20}}>
        <TASSLogo size="lg" theme="dark"/>
        <a href="https://theapprenticeshipsuccesssystem.co.uk"
          style={{display:"flex",alignItems:"center",gap:6,textDecoration:"none",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:99,padding:"5px 14px"}}>
          <span style={{fontSize:12}}>🏠</span>
          <span style={{color:"rgba(255,255,255,0.8)",fontSize:11,fontWeight:700,letterSpacing:"0.05em"}}>All Modules</span>
        </a>
      </div>
      <Card style={{borderLeft:`4px solid ${GOLD}`,background:"#FFFBEB"}}>
        <p style={{color:"#78350F",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,margin:"0 0 4px"}}>Graduate Apprenticeship</p>
        <p style={{color:NAVY,fontSize:14,lineHeight:1.7,margin:0}}>A Graduate Apprenticeship is a degree while you work. You are employed from day one, you earn a salary throughout, and you graduate with a full university degree — at SCQF Level 9, 10 or 11 — with zero tuition debt. This module covers everything from deciding if it is right for you, to landing the role and surviving the demands.</p>
      </Card>
      <Card style={{borderLeft:`4px solid ${TEAL}`,background:"#EFF6FF",marginBottom:20}}>
        <p style={{color:"#1A5276",fontWeight:700,fontSize:13,margin:"0 0 4px",textTransform:"uppercase",letterSpacing:0.5}}>Start here</p>
        <p style={{color:"#1A5276",fontSize:13,lineHeight:1.65,margin:0}}>Start with <strong>What is a GA?</strong> then <strong>GA vs MA</strong> to understand the landscape. Do the <strong>Am I Ready?</strong> self-assessment before you apply. Use the <strong>AI Coach</strong> at any stage for personalised guidance.</p>
      </Card>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:24}}>
        {cards.map((c,i)=>(
          <button key={i} onClick={()=>setTab(c.id)} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:12,padding:"14px 12px",textAlign:"left",cursor:"pointer",fontFamily:"inherit",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor=AMBER} onMouseLeave={e=>e.currentTarget.style.borderColor="#E2E8F0"}>
            <div style={{fontSize:20,marginBottom:6}}>{c.icon}</div>
            <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 3px",lineHeight:1.3}}>{c.title}</p>
            <p style={{color:MID,fontSize:11,lineHeight:1.4,margin:0}}>{c.desc}</p>
          </button>
        ))}
      </div>
      <div style={{textAlign:"center",color:"#AAA",fontSize:11}}><strong style={{color:TEAL}}>The Apprenticeship Success System™</strong> · tass.scot</div>
    </div>
  );
}

// WHAT IS A GA
function WhatModule(){
  return (
    <div>
      <PageHeader icon="🎓" title="What is a Graduate Apprenticeship?" subtitle="The earn-while-you-learn revolution — a degree, a salary and real experience, simultaneously."/>
      <Card style={{borderLeft:`4px solid ${GOLD}`,background:"#FFFBEB"}}>
        <p style={{color:"#78350F",fontWeight:800,fontSize:14,margin:"0 0 6px"}}>The one-sentence summary</p>
        <p style={{color:"#78350F",fontSize:14,lineHeight:1.7,margin:0}}>A Graduate Apprenticeship is a full university degree that you complete while working full-time, funded by the Scottish Government, with no tuition fees and a salary from day one.</p>
      </Card>
      <Accordion accent={GOLD} items={[
        {title:"How it works — the mechanics",content:"You are employed by a company. You work for them four days per week. One day per week (or equivalent block release) you attend university — either in person or online. Your academic content maps directly to your job.\n\nThe qualification is identical to one earned through full-time study at the same university. Your degree certificate says nothing about how you studied — you graduate the same as anyone else.\n\nYour employer pays your salary. The Scottish Government (through SAAS) pays your tuition fees directly to the university. You pay nothing.\n\nDuration: typically 3 years (SCQF Level 9 — Ordinary Degree) or 4 years (SCQF Level 10 — Honours Degree) or 5 years (SCQF Level 11 — Master's Degree)."},
        {title:"The SCQF framework — what your qualification level means",content:"All Scottish qualifications sit on the Scottish Credit and Qualifications Framework (SCQF). Graduate Apprenticeships operate at three levels:\n\nSCQF Level 9 — Ordinary Degree (BA, BSc)\nTypically 3 years. Available in Early Learning and Childcare and some Business frameworks.\n\nSCQF Level 10 — Honours Degree (BEng Hons, BSc Hons, BA Hons)\nTypically 4 years. The most common GA level. Available in Software Development, Engineering, Construction, Business Management, Accounting and more.\n\nSCQF Level 11 — Master's Degree (MSc)\nTypically 5 years. Available in Cyber Security (University of Strathclyde) and Accounting (Edinburgh Napier, Glasgow Caledonian).\n\nFor context: a Modern Apprenticeship (MA) typically sits at SCQF Level 6 (SVQ). A GA is between 3 and 5 levels above an MA in the same framework — it is a fundamentally different academic and professional commitment."},
        {title:"Why the Scottish Government funds this",content:"Scotland's Graduate Apprenticeship programme was introduced in 2017 in direct response to industry feedback that Scotland faced critical skills shortages in engineering, digital technology, construction and financial services.\n\nThe funding model is deliberate: by removing the financial barrier of tuition fees and enabling people to earn while they learn, the Scottish Government widens access to degree-level education and addresses sector skills gaps simultaneously.\n\nFor 2024–25, there are over 1,500 GA places funded across Scotland. The programme has grown consistently since 2017 and is supported by both the Scottish Funding Council (SFC) and Skills Development Scotland (SDS)."},
        {title:"Real experiences — what it actually feels like",content:"From an Engineering: Design and Manufacture apprentice at Heriot-Watt University:\n'I started out with a salary of £18,000 per year and I'm earning circa £22,500 fifteen months later. I couldn't ask for a more accommodating company who gives me appropriate time to complete any work-based learning required. I'm still living at home and this has ultimately turned into my dream scenario.'\n\nFrom Eva McEwan, Design Engineer, University of Strathclyde:\n'I'm in the fourth year of my Graduate Apprenticeship and I've been able to learn soldering skills in the lab since day one. I get a good mix of practical experience and theoretical knowledge. And as I progress through my degree, I get to put both of those together and complete things like my dissertation project based on what I'm doing at work.'\n\nFrom an Aegon HR Director:\n'Graduate Apprenticeships are a great opportunity for us to attract and retain talented individuals. The GA has been designed with the needs of our industry in mind, so we have complete confidence that the learning they get at university is relevant and will enable them to contribute to our success now and in the future.'"},
        {title:"Salary expectations — Scotland-specific figures",content:"Starting salaries vary considerably by sector and employer. These are realistic Scotland-specific ranges:\n\nIT: Software Development — £20,000–£26,000 starting; £40,000–£60,000+ after 5 years post-completion\nCyber Security — £22,000–£28,000 starting; £45,000–£70,000+ after 5 years\nEngineering: Design and Manufacture — £18,000–£24,000 starting; £37,000–£50,000+ after 5 years\nCivil Engineering / Construction — £18,000–£22,000 starting; £35,000–£55,000+ after 5 years\nBusiness Management — £18,000–£24,000 starting; £30,000–£45,000+ after 5 years\nAccounting — £20,000–£26,000 starting; £40,000–£60,000+ after 5 years\nData Science — £22,000–£28,000 starting; £45,000–£65,000+ after 5 years\n\nThese are Scotland-specific and reflect Edinburgh/Glasgow market rates. Salaries at major employers (JP Morgan, ScottishPower, Leonardo) are typically at or above the upper end of these ranges."},
        {title:"Professional accreditation — the additional qualification",content:"A distinctive feature of GA frameworks is alignment with professional bodies. This is a significant differentiator that traditional graduates spend years of additional work achieving.\n\nEngineering frameworks — accredited by IMechE, ICE and IET. Provides pathway to Incorporated Engineer (IEng) or Chartered Engineer (CEng) status.\n\nConstruction and the Built Environment — accredited by RICS and CIOB. Graduates can complete the Assessment of Professional Competence (APC) after the GA, leading to MRICS designation.\n\nAccounting with Professional Accreditation — explicitly aligned with ACCA requirements. GA graduates receive significant exemptions from professional exams, putting them substantially closer to full Chartered Certified Accountant status.\n\nCyber Security — graduates well-positioned for CISSP, CISM and BCS professional membership.\n\nThis means a GA graduate can emerge with a degree AND significant progress towards chartered/professional status — a combination that typically takes traditional graduates years of additional work to achieve."},
      ]}/>
    </div>
  );
}

// GA VS MA
function CompareModule(){
  const comparisons=[
    {factor:"Qualification level",ga:"SCQF Level 9–11 (Degree to Master's)",ma:"SCQF Level 5–8 (SVQ to HND equivalent)",winner:"ga"},
    {factor:"Duration",ga:"3–5 years",ma:"1–4 years",winner:"ma"},
    {factor:"Salary from day one",ga:"Yes — typically £18,000–£28,000",ma:"Yes — typically £14,000–£20,000",winner:"ga"},
    {factor:"Tuition fees",ga:"Fully funded by Scottish Government (SAAS)",ma:"No tuition fees — SDS funded",winner:"draw"},
    {factor:"Academic demand",ga:"Degree-level — essays, exams, dissertations",ma:"SVQ — competency-based, portfolio evidence",winner:"depends"},
    {factor:"Entry requirements",ga:"4 Highers (BBBB or above) + subject requirements",ma:"Typically National 5s or basic Highers",winner:"ma"},
    {factor:"Time at university",ga:"1 day per week or block release throughout",ma:"Day release for college component (some frameworks)",winner:"depends"},
    {factor:"Career ceiling",ga:"Degree-qualified professional — unlimited",ma:"Trade qualification — strong but sector-specific",winner:"ga"},
    {factor:"Debt on completion",ga:"Zero — no tuition fees, no student loan",ma:"Zero",winner:"draw"},
    {factor:"Professional accreditation",ga:"Many frameworks aligned with RICS, IMechE, ACCA etc.",ma:"SVQ qualification only",winner:"ga"},
    {factor:"Employer availability",ga:"Fewer employers — mainly large organisations",ma:"Thousands of employers across Scotland",winner:"ma"},
    {factor:"Age suitability",ga:"16+ but typically better suited to 18+ due to demands",ma:"16+ — most common entry point is 16–18",winner:"depends"},
  ];
  const [show,setShow]=useState(null);
  const scenarios=[
    {title:"Choose a GA if...",color:GOLD,points:["You have 4 Highers at BBBB or above","You are genuinely self-disciplined — you can manage a job AND degree study simultaneously","You are targeting a sector where a degree provides a significant career advantage (engineering, cyber security, data science, accounting)","You want professional accreditation (RICS, ACCA, IEng) as part of your route","You are comfortable with essays, exams and academic assessment alongside work","You want the highest possible qualification without student debt"]},
    {title:"Choose an MA if...",color:TEAL,points:["You want to start working immediately at 16 or 17 without degree-level academic pressure","You are entering a trade (carpentry, plumbing, electrical) where a degree is not required","You are not yet sure which career path to pursue and want to build skills first","Your Highers or academic background does not currently meet GA entry requirements","You want to work in a sector with many smaller employers offering apprenticeships","You prefer practical, portfolio-based assessment over academic essays and exams"]},
    {title:"Consider an MA first, then a GA if...",color:"#6B21A8",points:["You are 16–17 and interested in engineering or IT but want to build experience first","Your Highers are below GA entry requirements but you are committed to a degree-level career","You want to prove yourself in a sector before committing to 4–5 years of study","Your employer offers HNC/HND funding as a stepping stone to GA entry","Some GA programmes offer advanced entry for HND holders — this can be a deliberate strategy"]},
  ];
  return (
    <div>
      <PageHeader icon="⚖️" title="GA vs MA" subtitle="The honest comparison most people never see — what each route actually offers and which is right for you."/>
      <InfoBox text="Neither route is superior. Both lead to strong careers. The question is which fits your academic background, personal circumstances and career goals right now." type="info"/>
      <p style={{color:NAVY,fontWeight:800,fontSize:12,textTransform:"uppercase",letterSpacing:0.5,margin:"0 0 12px"}}>Head-to-head comparison</p>
      <Card style={{padding:0,overflow:"hidden"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",background:NAVY,padding:"10px 12px"}}>
          <p style={{color:"rgba(255,255,255,0.6)",fontSize:11,fontWeight:700,textTransform:"uppercase",margin:0}}>Factor</p>
          <p style={{color:GOLD,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:0}}>GA</p>
          <p style={{color:TEAL,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:0}}>MA</p>
        </div>
        {comparisons.map((row,i)=>(
          <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"10px 12px",borderBottom:i<comparisons.length-1?"1px solid #F0F4F8":"none",background:i%2===0?WHITE:"#FAFBFC"}}>
            <p style={{color:NAVY,fontWeight:700,fontSize:12,margin:0,lineHeight:1.4}}>{row.factor}</p>
            <p style={{color:row.winner==="ga"?GOLD:"#444",fontSize:12,margin:0,lineHeight:1.4,fontWeight:row.winner==="ga"?700:400}}>{row.ga}</p>
            <p style={{color:row.winner==="ma"?TEAL:"#444",fontSize:12,margin:0,lineHeight:1.4,fontWeight:row.winner==="ma"?700:400}}>{row.ma}</p>
          </div>
        ))}
      </Card>
      <p style={{color:NAVY,fontWeight:800,fontSize:12,textTransform:"uppercase",letterSpacing:0.5,margin:"16px 0 10px"}}>Which route is right for you?</p>
      {scenarios.map((s,i)=>(
        <div key={i} style={{background:WHITE,border:`1px solid ${show===i?s.color:"#E2E8F0"}`,borderRadius:12,overflow:"hidden",marginBottom:10}}>
          <button onClick={()=>setShow(show===i?null:i)} style={{width:"100%",background:show===i?s.color:WHITE,border:"none",padding:"13px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:"pointer",fontFamily:"inherit"}}>
            <span style={{color:show===i?WHITE:NAVY,fontWeight:700,fontSize:14}}>{s.title}</span>
            <span style={{color:show===i?WHITE:s.color,fontSize:18}}>{show===i?"−":"+"}</span>
          </button>
          {show===i&&(
            <div style={{padding:"0 15px 15px",borderTop:`1px solid ${s.color}30`}}>
              {s.points.map((p,j)=>(
                <div key={j} style={{display:"flex",gap:10,marginBottom:8,alignItems:"flex-start",paddingTop:j===0?12:0}}>
                  <div style={{width:5,height:5,background:s.color,borderRadius:99,flexShrink:0,marginTop:5}}/>
                  <p style={{color:"#444",fontSize:13,lineHeight:1.6,margin:0}}>{p}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// FRAMEWORKS
function FrameworksModule(){
  const frameworks=[
    {id:"software",label:"IT: Software Development",icon:"💻",level:"SCQF Level 10 (BEng/BSc Hons)",duration:"4 years",universities:["University of Glasgow","Heriot-Watt University","Edinburgh Napier University","University of Dundee","University of the West of Scotland"],employers:["JP Morgan Chase","ScottishPower","Leonardo","Scottish Government Digital","Various tech SMEs"],entry:"4 Highers at BBBB — typically including Maths and a science or computing subject",desc:"Develops expertise in programming languages, software engineering, systems design and agile methodologies. One of the most active and competitive GA frameworks in Scotland.",salary:"£20,000–£26,000 starting"},
    {id:"cyber",label:"Cyber Security",icon:"🔒",level:"SCQF Level 10 (BSc Hons) or Level 11 (MSc)",duration:"4–5 years",universities:["University of Strathclyde (MSc — highly regarded)","Glasgow Caledonian University","Edinburgh Napier University"],employers:["Scottish Government","NHS Scotland","Financial services firms","Defence contractors","Specialist cyber firms (Quorum Cyber, Secarma)"],entry:"4 Highers at BBBB — typically including Maths and Computing or Physics",desc:"One of the fastest-growing and best-paid frameworks. Available at both degree and master's level. Critical skills shortage means strong employment outcomes.",salary:"£22,000–£28,000 starting"},
    {id:"data",label:"Data Science",icon:"📊",level:"SCQF Level 10 (BSc Hons)",duration:"4 years",universities:["Robert Gordon University","University of Dundee","University of Strathclyde"],employers:["NHS National Services Scotland","Scottish Government analytical services","Retailers","Financial services"],entry:"4 Highers at BBBB — Maths at Higher essential, Statistics or Computing advantageous",desc:"Prepares apprentices to work with large datasets, statistical modelling, machine learning and data visualisation. One of the most versatile qualifications — applicable across every sector.",salary:"£22,000–£28,000 starting"},
    {id:"itmgmt",label:"IT: Management for Business",icon:"🖥️",level:"SCQF Level 10 (BA Hons)",duration:"4 years",universities:["University of Strathclyde","University of Glasgow"],employers:["Large organisations across all sectors","Public sector","Financial services"],entry:"4 Highers at BBBB — Business and Maths advantageous",desc:"Bridges technology and business — producing professionals who manage IT systems, digital transformation and technology strategy. Strong route into IT management without a purely technical background.",salary:"£20,000–£25,000 starting"},
    {id:"engineering",label:"Engineering: Design and Manufacture",icon:"⚙️",level:"SCQF Level 10 (BEng Hons)",duration:"4 years",universities:["Heriot-Watt University","University of Strathclyde","University of the West of Scotland"],employers:["BAE Systems","Babcock International","Weir Group","Spirit AeroSystems","NHS Estates"],entry:"4 Highers at BBBB — Maths and Physics typically required",desc:"Accredited by IMechE — provides a clear pathway to Incorporated Engineer (IEng) status. Covers CAD design, materials science, manufacturing processes and project management.",salary:"£18,000–£24,000 starting"},
    {id:"civil",label:"Civil Engineering",icon:"🏗️",level:"SCQF Level 10 (BEng Hons)",duration:"4 years",universities:["University of Strathclyde","Edinburgh Napier University"],employers:["Balfour Beatty","BAM","Arcadis","Transport Scotland","Scottish Water"],entry:"4 Highers at BBBB — Maths and Physics typically required",desc:"Linked to Scotland's infrastructure and built environment industries. ICE accredited — pathway to Chartered Civil Engineer status.",salary:"£18,000–£22,000 starting"},
    {id:"construction",label:"Construction and the Built Environment",icon:"🏛️",level:"SCQF Level 10 (BSc Hons)",duration:"4 years",universities:["Edinburgh Napier University","Glasgow Caledonian University","Robert Gordon University"],employers:["Balfour Beatty","BAM","Arcadis","Scottish councils","Housing associations"],entry:"4 Highers at BBBB — Maths advantageous",desc:"Accredited by RICS and CIOB. Graduates can pursue MRICS or MCIOB status — globally recognised professional designations. Covers quantity surveying, project management and construction.",salary:"£18,000–£22,000 starting"},
    {id:"business",label:"Business Management",icon:"💼",level:"SCQF Level 10 (BA Hons)",duration:"4 years",universities:["Robert Gordon University","University of Dundee","University of the West of Scotland","Heriot-Watt University"],employers:["NHS Scotland","Scottish Government","Financial services","Energy companies","Various SMEs"],entry:"4 Highers at BBBB — English and Maths typically required",desc:"One of the most popular and widely available GAs. Specialisms available in Financial Services, Business Analysis and Project Management. Broadest employer base of any framework.",salary:"£18,000–£24,000 starting"},
    {id:"accounting",label:"Accounting with Professional Accreditation",icon:"🧮",level:"SCQF Level 10 (BA Hons) or Level 11 (MAcc)",duration:"4–5 years",universities:["Edinburgh Napier University (MAcc)","Glasgow Caledonian University (MAcc)"],employers:["Big 4 accountancy firms","Financial services","NHS","Scottish Government"],entry:"4 Highers at BBBB — Maths essential, often at B or above",desc:"Explicitly aligned with ACCA requirements. GA graduates receive significant exam exemptions — substantially closer to full Chartered Certified Accountant status on completion. One of the highest-value professional qualifications available through the GA route.",salary:"£20,000–£26,000 starting"},
    {id:"elc",label:"Early Learning and Childcare",icon:"🌟",level:"SCQF Level 9 (BA — Ordinary Degree)",duration:"3 years",universities:["University of the West of Scotland","University of Stirling","Various colleges with degree-level delivery"],employers:["All 32 Scottish councils","Private nurseries","Third sector childcare organisations"],entry:"2–3 Highers — sector experience often considered alongside qualifications",desc:"Supports Scotland's 1140 hours ELC expansion. Produces degree-qualified ELC practitioners. Strong job security given sustained government investment. One of the most accessible GA routes in terms of entry requirements.",salary:"£18,000–£22,000 starting"},
  ];
  const [active,setActive]=useState("software");
  const f=frameworks.find(x=>x.id===active)||frameworks[0];
  return (
    <div>
      <PageHeader icon="📋" title="The 15 Frameworks" subtitle="Every Graduate Apprenticeship pathway in Scotland — select one to explore universities, employers, entry requirements and salary."/>
      <InfoBox text="Scotland currently offers 15 distinct GA frameworks. The 10 most active are shown here. All are funded by the Scottish Government with no tuition fees." type="info"/>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14}}>
        {frameworks.map(fw=>(
          <button key={fw.id} onClick={()=>setActive(fw.id)} style={{background:active===fw.id?NAVY:WHITE,color:active===fw.id?WHITE:MID,border:`1px solid ${active===fw.id?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:10,fontWeight:active===fw.id?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {fw.icon} {fw.label.split(":")[0].split(" ")[0]}
          </button>
        ))}
      </div>
      <Card>
        <p style={{color:GOLD,fontWeight:800,fontSize:15,margin:"0 0 4px"}}>{f.icon} {f.label}</p>
        <p style={{color:MID,fontSize:12,margin:"0 0 12px"}}>{f.level} · {f.duration}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.65,margin:"0 0 14px"}}>{f.desc}</p>
        {[["Starting salary",f.salary],["Entry requirements",f.entry]].map(([label,val],i)=>(
          <div key={i} style={{display:"flex",gap:12,padding:"9px 0",borderBottom:"1px solid #F0F4F8"}}>
            <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",minWidth:110,flexShrink:0}}>{label}</span>
            <span style={{color:NAVY,fontSize:13,lineHeight:1.5}}>{val}</span>
          </div>
        ))}
        <div style={{display:"flex",gap:12,padding:"9px 0",borderBottom:"1px solid #F0F4F8"}}>
          <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",minWidth:110,flexShrink:0}}>Universities</span>
          <div>{f.universities.map((u,i)=><p key={i} style={{color:NAVY,fontSize:13,margin:"0 0 2px"}}>{u}</p>)}</div>
        </div>
        <div style={{display:"flex",gap:12,padding:"9px 0"}}>
          <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",minWidth:110,flexShrink:0}}>Key employers</span>
          <div>{f.employers.map((e,i)=><p key={i} style={{color:NAVY,fontSize:13,margin:"0 0 2px"}}>{e}</p>)}</div>
        </div>
      </Card>
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 10px",textTransform:"uppercase"}}>Alternative entry pathways</p>
        {[
          {title:"Foundation Apprenticeship (FA)",desc:"Completed in S5 or S6. Universities must consider FA achievement in entry decisions. Some institutions treat a completed FA as equivalent to a Higher in the relevant subject."},
          {title:"HNC/HND holders",desc:"Holders of relevant HNC or HND qualifications may be eligible for advanced entry into Year 2 of a GA programme — significantly shortening the overall duration."},
          {title:"Recognition of Prior Learning (RPL)",desc:"Universities must use RPL processes to offer flexibility to applicants with relevant industry experience or professional qualifications. This makes GAs genuinely accessible to career changers over 25."},
        ].map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:10,alignItems:"flex-start",paddingBottom:10,borderBottom:i<2?"1px solid #F0F4F8":"none"}}>
            <div style={{width:5,height:5,background:TEAL,borderRadius:99,flexShrink:0,marginTop:5}}/>
            <div><p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 3px"}}>{item.title}</p><p style={{color:"#555",fontSize:13,lineHeight:1.6,margin:0}}>{item.desc}</p></div>
          </div>
        ))}
      </Card>
    </div>
  );
}

// AM I READY
function ReadyModule(){
  const [scores,setScores]=useState({});
  const questions=[
    {id:"academic",label:"Academic resilience",q:"I can write essays, complete exams and produce academic work to deadline — even when work is stressful.",options:["Definitely — I have done this consistently","Probably — I have done it but found it hard","I am not sure — I have not been tested at this level","Unlikely — academic writing and exams are not my strength"]},
    {id:"time",label:"Time management",q:"I can manage multiple deadlines simultaneously — a work project and a university assignment due the same week.",options:["Yes — I have done this regularly and managed well","Usually — I sometimes struggle but generally cope","Sometimes — I often need to sacrifice one for the other","Rarely — I find it hard to manage more than one major commitment"]},
    {id:"selfdirected",label:"Self-directed learning",q:"I can teach myself new things without being supervised or reminded. I pick up new skills in my own time.",options:["Yes — I regularly learn independently and can evidence this","Mostly — I can when motivated but need some structure","Sometimes — I prefer structured environments with clear instruction","No — I work best when someone tells me exactly what to do"]},
    {id:"resilience",label:"Resilience under pressure",q:"When things go wrong simultaneously — a difficult week at work AND a looming deadline — I stay functional.",options:["Yes — I recover quickly and stay focused","Usually — I get stressed but pull through","Sometimes — I can shut down or become avoidant under pressure","Rarely — I find combined pressure very difficult to manage"]},
    {id:"communication",label:"Professional communication",q:"I can communicate clearly and professionally in writing and in person — with managers, colleagues and academic staff.",options:["Yes — this is a genuine strength","Mostly — I can do it but it does not come naturally","I am developing — I sometimes find professional communication awkward","No — this is an area I would need significant development in"]},
    {id:"commitment",label:"Long-term commitment",q:"I am ready to commit to 4–5 years of combined work and study. I will not bail when it gets hard.",options:["Yes — I am fully committed and have thought this through","Probably — I am motivated but have some doubts","I am not sure — I have not fully thought through the duration","Unlikely — 4–5 years feels like too long a commitment right now"]},
  ];
  const totalAnswered=Object.keys(scores).length;
  const totalScore=Object.values(scores).reduce((a,b)=>a+b,0);
  const maxScore=questions.length*3;
  const pct=totalAnswered===questions.length?Math.round((totalScore/maxScore)*100):null;

  function getVerdict(){
    if(pct===null)return null;
    if(pct>=80)return{label:"Strong candidate",color:GREEN,text:"Your responses suggest you have the academic resilience, self-discipline and commitment that a Graduate Apprenticeship demands. You are well-suited to apply. Focus your preparation on finding the right framework and employer match."};
    if(pct>=60)return{label:"Ready with preparation",color:TEAL,text:"You have the foundations but some areas need strengthening before you apply. Look honestly at your weaker responses — academic writing, time management or resilience — and take deliberate steps to address them. A GA will be demanding but achievable with the right preparation."};
    if(pct>=40)return{label:"Consider an MA first",color:AMBER,text:"Your responses suggest a Graduate Apprenticeship may be premature right now. A Modern Apprenticeship would build your professional foundations, develop your confidence and potentially open a GA route through HNC/HND advanced entry. That is not a step down — it is a strategic approach."};
    return{label:"Start with an MA",color:RUST,text:"Based on your responses, a Graduate Apprenticeship is likely to be extremely challenging right now. A Modern Apprenticeship would give you the professional experience, qualifications and maturity to reassess in 2–3 years. Many successful GA candidates started with an MA first."};
  }
  const verdict=getVerdict();

  return (
    <div>
      <PageHeader icon="✅" title="Am I Ready for a GA?" subtitle="An honest self-assessment before you commit. Answer truthfully — this is for your benefit, not anyone else's."/>
      <InfoBox text="A Graduate Apprenticeship is not the easy path. It demands more of you than either full-time study or full-time work alone. This assessment helps you make a realistic decision before committing 4–5 years." type="warning"/>
      {questions.map((q,i)=>(
        <Card key={q.id}>
          <p style={{color:TEAL,fontSize:11,fontWeight:700,textTransform:"uppercase",margin:"0 0 4px"}}>{q.label}</p>
          <p style={{color:NAVY,fontWeight:700,fontSize:14,margin:"0 0 12px",lineHeight:1.4}}>{q.q}</p>
          {q.options.map((opt,j)=>(
            <button key={j} onClick={()=>setScores(s=>({...s,[q.id]:3-j}))} style={{width:"100%",display:"flex",alignItems:"center",gap:10,background:scores[q.id]===3-j?TEAL+"15":WHITE,border:`1px solid ${scores[q.id]===3-j?TEAL:"#E2E8F0"}`,borderRadius:8,padding:"10px 12px",marginBottom:6,cursor:"pointer",fontFamily:"inherit",textAlign:"left"}}>
              <div style={{width:16,height:16,borderRadius:99,border:`2px solid ${scores[q.id]===3-j?TEAL:"#CBD5E1"}`,background:scores[q.id]===3-j?TEAL:WHITE,flexShrink:0}}/>
              <span style={{color:scores[q.id]===3-j?TEAL:NAVY,fontSize:13,lineHeight:1.4}}>{opt}</span>
            </button>
          ))}
        </Card>
      ))}
      {totalAnswered===questions.length&&verdict&&(
        <Card style={{borderLeft:`4px solid ${verdict.color}`,background:verdict.color+"12"}}>
          <p style={{color:verdict.color,fontWeight:800,fontSize:15,margin:"0 0 8px"}}>{verdict.label}</p>
          <p style={{color:"#333",fontSize:14,lineHeight:1.7,margin:0}}>{verdict.text}</p>
        </Card>
      )}
      {totalAnswered<questions.length&&(
        <div style={{background:GREY,borderRadius:10,padding:14,textAlign:"center"}}>
          <p style={{color:MID,fontSize:13,margin:0}}>Answer all {questions.length} questions to see your result — {totalAnswered}/{questions.length} answered</p>
        </div>
      )}
    </div>
  );
}


// APPLY
function ApplyModule(){
  const [step,setStep]=useState(0);
  const steps=[
    {title:"Research and target",icon:"🔍",content:"Start at apprenticeships.scot — filter by Graduate Apprenticeship, then by framework and location. Set up email alerts immediately.\n\nAlso check employer websites directly — JP Morgan, ScottishPower, Leonardo, NHS Scotland, Scottish Government and all 32 councils advertise GA roles on both apprenticeships.scot and their own careers pages.\n\nRecruitment calendar:\n• November–January — start searching for September starts\n• January–April — peak application period for most GA programmes\n• February–April — engineering and construction typically close before Easter\n• Year-round — some large private sector employers recruit continuously\n\nThe best candidates apply early. Closing dates are often earlier than they appear.",tip:"Set alerts on both apprenticeships.scot and employer websites separately. Some GA roles are advertised exclusively through employer channels and never appear on the central portal."},
    {title:"The two-stage application",icon:"📝",content:"GA applications are two-stage:\n\nStage 1 — Employer application\nYou apply to the employer via their website or apprenticeships.scot. This typically involves a CV, covering letter or personal statement, and sometimes online assessments (verbal reasoning, numerical reasoning, situational judgement).\n\nStage 2 — University application\nIf shortlisted, you apply to the partner university. This may involve a separate personal statement focused on your academic motivation and readiness for degree-level study.\n\nSome employers run the two stages simultaneously. Others complete employer selection before involving the university. Check the specific process for each role.\n\nAssessment centres: major employers (JP Morgan, Leonardo, ScottishPower) typically run assessment centres including group exercises, presentations, written tasks and individual interviews.",tip:"GA applications are significantly more competitive than standard MA applications. At major employers, 50–200 candidates may apply for a single GA place. Generic applications will not succeed."},
    {title:"Entry requirements check",icon:"✅",content:"Before applying, verify your qualifications meet the specific requirements for the framework AND the specific university delivering it.\n\nTypical requirements for SCQF Level 10 (Honours Degree) GAs:\n• 4 SQA Highers at BBBB or above\n• Specific subject requirements — Engineering and IT typically require Maths and Physics or Computing; Business typically requires English and Maths\n• Some universities require a minimum grade in specific subjects\n\nAlternative routes:\n• Foundation Apprenticeship — counted as equivalent to a Higher at some universities\n• HNC/HND — may qualify for Year 2 advanced entry\n• Recognition of Prior Learning (RPL) — industry experience can be assessed for alternative entry\n\nImportant: entry requirements are set by the university, not SDS. Check the specific university delivering the framework you want — requirements vary.",tip:"Contact the university admissions team directly if you are unsure. They can advise on RPL and alternative entry before you apply."},
    {title:"The personal statement",icon:"✍️",content:"The GA personal statement must address THREE audiences simultaneously:\n\n1. The employer — why you want to work in this sector and for this specific company\n2. The university — why you are ready for degree-level academic study\n3. The GA itself — why earn-while-you-learn suits you specifically\n\nStructure:\nOpening (3–4 sentences): The specific GA and employer, and a compelling statement of why you are genuinely interested.\n\nMiddle (2–3 paragraphs): Your academic achievements with grades, your relevant experience, and specific evidence of key skills required for the framework.\n\nClosing (2–3 sentences): Reiterate enthusiasm, confirm commitment to the dual demands, thank the reader.\n\nLength: typically 500–700 words. Never more than one side of A4.",tip:"The most common mistake is being generic. Employers receive dozens of statements saying 'I am passionate about technology.' Name the specific employer, the specific framework, and something specific about the company you find compelling."},
    {title:"After you apply",icon:"📮",content:"Once submitted:\n• Note the closing date and expected decision date\n• Keep applying to other roles — do not wait for one outcome\n• If shortlisted, confirm interview attendance immediately and professionally\n\nIf invited to interview:\n• Research the employer thoroughly — annual report, recent news, company values\n• Read the university's information on the specific GA framework\n• Prepare STAR examples at degree-level depth (see the STAR tab)\n• Prepare for assessment centre exercises if applicable\n\nIf rejected:\n• Request feedback — politely ask if it is not offered\n• Most successful GA candidates apply more than once\n• A GA rejection is about one application on one day — not a verdict on your potential",tip:"After any rejection, send a professional email requesting feedback. This signals maturity and professionalism — and the information is invaluable for improving your next application."},
  ];
  const s=steps[step];
  return (
    <div>
      <PageHeader icon="📝" title="How to Apply" subtitle="Step-by-step from first search to offer — including the timeline most people miss."/>
      <InfoBox text="GA applications are more competitive than standard MA applications. At major employers, 50–200 candidates may apply for a single place. Preparation and tailoring are essential." type="warning"/>
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        {steps.map((st,i)=>(
          <button key={i} onClick={()=>setStep(i)} style={{background:step===i?NAVY:WHITE,color:step===i?WHITE:MID,border:`1px solid ${step===i?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:step===i?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase",whiteSpace:"nowrap"}}>
            {st.icon} {i+1}
          </button>
        ))}
      </div>
      <Card>
        <p style={{color:NAVY,fontWeight:800,fontSize:15,margin:"0 0 4px"}}>{s.icon} {s.title}</p>
        <div style={{height:2,width:28,background:AMBER,borderRadius:2,marginBottom:12}}/>
        <p style={{color:"#444",fontSize:14,lineHeight:1.75,margin:"0 0 12px",whiteSpace:"pre-line"}}>{s.content}</p>
        <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px"}}>
          <p style={{color:"#92400E",fontSize:13,lineHeight:1.6,margin:0}}>💡 {s.tip}</p>
        </div>
      </Card>
      <div style={{display:"flex",gap:10}}>
        {step>0&&<button onClick={()=>setStep(s=>s-1)} style={{flex:1,padding:12,background:WHITE,border:"1px solid #E2E8F0",color:NAVY,borderRadius:8,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>← Previous</button>}
        {step<steps.length-1&&<button onClick={()=>setStep(s=>s+1)} style={{flex:1,padding:12,background:AMBER,border:"none",color:NAVY,borderRadius:8,fontWeight:800,cursor:"pointer",fontFamily:"inherit"}}>Next →</button>}
      </div>
    </div>
  );
}

// MYJOBSCOTLAND
function MJSModule(){
  const [section,setSection]=useState("overview");
  const sections={
    overview:{label:"Overview",content:"MyJobScotland is the primary recruitment portal for all 32 Scottish councils, the Scottish Government, NHS Scotland, Police Scotland and many other public sector organisations.\n\nFor Graduate Apprenticeships, the public sector is one of the most active employers:\n\nScottish Government — Digital Directorate GA roles in Software Development and Cyber Security. Also Business Management GAs across various directorates.\n\nNHS Scotland — Engineering and Data Science GAs at NHS National Services Scotland.\n\nScottish councils — Business Management, Construction and Built Environment GAs. Some councils run structured cohort programmes recruiting multiple GA candidates annually.\n\nTransport Scotland and Scottish Water — Engineering and Civil Engineering GAs.\n\nPublic sector GAs have specific advantages: structured progression, good employer pension, job security, and clear alignment between the academic framework and the actual job role.",tip:"Set alerts on MyJobScotland for: 'Graduate Apprenticeship', 'GA', 'degree apprenticeship'. The portal uses inconsistent terminology — search all three terms."},
    statement:{label:"Supporting Statement",content:"Public sector GA applications via MyJobScotland require a supporting statement — scored against a person specification.\n\nEvery Essential criterion is a potential mark. Treat it like a scored exam.\n\nHow to write it:\n1. Print the person specification and highlight every Essential criterion\n2. For each criterion, write one focused paragraph addressing it directly using STAR\n3. Mirror the exact language of the person specification\n4. Address criteria in the order they appear\n\nGA-specific criteria you will frequently encounter:\n• Ability to balance work and study commitments\n• Commitment to professional and academic development\n• Relevant subject knowledge or academic achievement\n• Ability to apply learning to workplace practice\n\nFor the 'work and study balance' criterion — give a specific example of managing multiple demanding commitments, not a general statement about time management.",tip:"The supporting statement for a GA application must address BOTH the work role AND the academic programme. Most candidates only address one and score zero on the criteria they miss."},
    tests:{label:"Online Tests",content:"Many large GA employers include online assessments before the interview stage:\n\nVerbal Reasoning — reading comprehension, evaluating arguments, identifying conclusions.\n\nNumerical Reasoning — data interpretation, percentages, ratios, graph reading. National 5 Maths level but under time pressure.\n\nSituational Judgement Tests (SJT) — workplace scenarios assessed against employer values.\n\nFor IT and Engineering GAs specifically:\n• Coding challenges (basic algorithms in Python, JavaScript)\n• Technical knowledge questions (networking basics, engineering principles)\n\nPractice resources:\n• SHL Practice: shldirect.com\n• JobTestPrep: jobtestprep.co.uk\n• Graduates First: graduatesfirst.com\n\nPractise under timed conditions. The tests are designed to be difficult to complete — time management is as important as accuracy.",tip:"Never attempt online assessments when tired or at the last minute. Do them at a time of day when you are alert, in a quiet environment. First attempt counts — there are no retakes."},
  };
  const s=sections[section];
  return (
    <div>
      <PageHeader icon="🏛️" title="MyJobScotland Guide" subtitle="Public sector GA roles — Scottish Government, NHS, councils and how to win them."/>
      <NavTabBar options={Object.entries(sections).map(([k,v])=>({id:k,label:v.label}))} active={section} onSelect={setSection}/>
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase"}}>{s.label}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:"0 0 14px",whiteSpace:"pre-line"}}>{s.content}</p>
        <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px"}}>
          <p style={{color:"#92400E",fontSize:13,lineHeight:1.6,margin:0}}>💡 {s.tip}</p>
        </div>
      </Card>
      <p style={{color:NAVY,fontWeight:800,fontSize:12,textTransform:"uppercase",letterSpacing:0.5,margin:"16px 0 10px"}}>Supporting statement — weak vs strong</p>
      <ExampleToggle
        weak="I am applying for the Graduate Apprenticeship in Software Development because I have always been passionate about technology. I am a hard worker and I am good at managing my time. I believe I have the right qualities to succeed in this programme and I am excited about the opportunity to earn while I learn."
        strong="I am applying for the Graduate Apprenticeship in Software Development at Scottish Government Digital because I want to contribute to the transformation of public services through technology.\n\nIn response to the Essential criterion 'ability to apply technical knowledge to real-world problems', I draw on my experience building a data tracking tool in Python for my school enterprise club, which automated a process that had previously required 3 hours of manual input per week. I identified the problem, researched the solution independently, built and tested the tool, and trained two other students to maintain it.\n\nIn response to the criterion 'ability to balance competing work and study demands', I maintained a part-time Saturday job at Boots throughout S5 and S6 while achieving four Highers at AABB. I managed this by using Sunday evenings for weekly planning and communicating proactively with my manager when exam periods required schedule adjustments.\n\nI have researched Scottish Government Digital's cloud-first strategy and am specifically motivated by the opportunity to contribute to services used by millions of people in Scotland."
        weakLabel="Weak statement"
        strongLabel="Strong statement"
      />
    </div>
  );
}

// CV
function CVModule(){
  const [cohort,setCohort]=useState("school");
  const cvs={
    school:{label:"School Leaver (17–18)",
      skills:{
        weak:"Good at Maths and Physics. IT skills. Teamwork. Communication. Hardworking. Quick learner. Organised.",
        strong:"Technical skills: Higher Maths (A) and Physics (A); Autodesk Tinkercad CAD (online certification, 2024); Python fundamentals (self-taught, CS50P Module 1–3)\nEngineering problem-solving: designed and built sensor calibration algorithm for line-following robot — researched PID control theory independently and implemented a working solution\nCommunication: presented technical design to panel of 3 industry engineers at regional STEM competition\nProject management: led 4-person team through a 6-week build project — weekly planning, task allocation, deadline management\nSelf-directed learning: independently pursued CAD and programming knowledge beyond school curriculum; completed 3 online courses in the past 12 months\nAnalytical thinking: Higher Chemistry (B) — consistent top-set performance in data analysis and experimental design modules"},
      profile:{
        weak:"I am 18 and I am applying for a Graduate Apprenticeship. I have good grades and I am interested in engineering. I am a hard worker and a quick learner and I believe I would be a good fit for this programme.",
        strong:"Academically strong 18-year-old with a genuine passion for engineering and a record of applying technical knowledge beyond the classroom. Achieved Higher Maths (A), Physics (A), Chemistry (B) and English (B). Built and programmed a line-following robot as part of a 4-person team at the regional STEM competition — responsible for sensor calibration and code optimisation. Completed the Autodesk Tinkercad CAD online course (2024). Seeking the Engineering: Design and Manufacture Graduate Apprenticeship at Heriot-Watt with Babcock International — specifically motivated by Babcock's commitment to defence engineering and their structured mentoring programme for GA candidates."},
      experience:{
        weak:"I did work experience at an engineering company. I also did well at school and I am good at Maths and Physics. I have been involved in the STEM club at school.",
        strong:"STEM Club Lead, Riverside Academy (Sept 2022–June 2024)\n• Led a 4-person team to design, build and program a line-following robot for the regional STEM competition\n• Responsible for the sensor calibration algorithm — researched PID control theory independently and implemented a working solution\n• Presented the technical design to a panel of 3 engineers from a local manufacturing company\n• Shortlisted for regional final — top 8 of 34 entries\n\nWork Experience, Babcock International (2 weeks, June 2024)\n• Observed and assisted in the hydraulic systems maintenance team at Rosyth\n• Shadowed a Chartered Engineer on a scheduled maintenance procedure\n• Completed a reflection report commended by the supervisor as 'unusually analytical for a school-age student'"}},
    changer:{label:"Career Changer (25+)",
      skills:{
        weak:"IT skills. Good communication. Management experience. Problem solving. Team player. Works well under pressure. Adaptable.",
        strong:"Technical: Python (REST APIs, automation scripts — 3 personal projects including a live charity API serving 200+ users); Active Directory and Office 365 administration (5 years professional use); Azure fundamentals awareness (self-study, 2024)\nSelf-directed development: completed 60% of CS50x (Harvard/edX); currently working through CS50 Python; 6 hours per week of independent technical learning\nProject delivery: led migration of 12 legacy NHS applications to cloud-hosted equivalents — on time, 8% under budget, zero critical incidents\nAnalytical: identified and resolved critical authentication vulnerability before exploitation; commended by CISO\nWork-study balance: completed HNC Computing (Distinction) while in full-time employment; demonstrable ability to manage professional commitments alongside structured learning\nCommunication: designed and delivered 2-day induction programme for junior colleagues — adopted as team standard"},
      profile:{
        weak:"I have been working in IT for 5 years and I want to do a Graduate Apprenticeship to get a degree. I have a lot of experience and I think I would be a strong candidate. I am ready to commit to the programme.",
        strong:"IT professional with 5 years of systems administration and infrastructure experience at NHS Tayside, now seeking the IT: Software Development Graduate Apprenticeship to formalise skills and develop into a software engineering role. Hold an HNC in Computing (Distinction, Dundee College, 2020) — eligible for Year 2 advanced entry consideration. Independently completed 60% of CS50x (Harvard/edX) and built three personal projects in Python including a REST API for a local community charity now serving 200+ users. Committed to the full degree programme alongside continued employment. Motivated by a specific ambition to contribute to NHS Scotland's digital transformation programme."},
      experience:{
        weak:"I have 5 years of experience in IT at NHS Tayside. I have done a lot of different things including systems administration and helping users with their problems. I have also done some coding in my own time.",
        strong:"Systems Administrator, NHS Tayside (Sept 2019–present)\n• Managed Active Directory, Office 365 and on-premise server infrastructure for a 3,500-user NHS board\n• Led the migration of 12 legacy applications to cloud-hosted equivalents — completed on time and 8% under budget\n• Wrote Python scripts automating weekly reporting processes, reducing manual effort by 6 hours per week\n• Identified and resolved a critical authentication vulnerability before exploitation — commended by the CISO\n• Designed and delivered a 2-day induction programme for 3 junior colleagues, adopted as the team standard"}},
  };
  const c=cvs[cohort];
  return (
    <div>
      <PageHeader icon="📄" title="CV and Covering Letter" subtitle="GA applications demand more specificity than MA applications. Generic will not succeed."/>
      <InfoBox text="The GA CV must address the employer AND the university simultaneously. Every claim must be evidenced. For technology and engineering frameworks, include personal projects, online courses and certifications." type="tip"/>
      <div style={{display:"flex",gap:8,marginBottom:16}}>
        {Object.entries(cvs).map(([k,v])=>(
          <button key={k} onClick={()=>setCohort(k)} style={{background:cohort===k?NAVY:WHITE,color:cohort===k?WHITE:MID,border:`1px solid ${cohort===k?NAVY:"#E2E8F0"}`,borderRadius:10,padding:"10px 14px",cursor:"pointer",fontFamily:"inherit",flex:1,fontWeight:700,fontSize:12}}>
            {v.label.split(" (")[0]}
          </button>
        ))}
      </div>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Personal Profile — {c.label}</p>
      <ExampleToggle weak={c.profile.weak} strong={c.profile.strong} weakLabel="Weak profile" strongLabel="Strong profile"/>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"16px 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Experience — {c.label}</p>
      <ExampleToggle weak={c.experience.weak} strong={c.experience.strong} weakLabel="Weak experience" strongLabel="Strong experience"/>
      <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"16px 0 10px",textTransform:"uppercase",letterSpacing:0.5}}>Skills Section — {c.label}</p>
      <ExampleToggle weak={c.skills.weak} strong={c.skills.strong} weakLabel="Weak skills" strongLabel="Strong skills"/>
      <Card style={{marginTop:8}}>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 10px",textTransform:"uppercase"}}>GA-specific CV checklist</p>
        {["Specific employer named in personal profile","Specific framework named — not just 'a Graduate Apprenticeship'","Academic achievements with specific grades listed","Personal projects, online courses or certifications included","Evidence of ability to manage work and study simultaneously","At least one example showing independent or self-directed learning","Technical skills listed specifically (languages, tools, software)","'I' used throughout — not 'we'","Covering letter tailored to the specific employer with company-specific detail"].map((item,i)=>(
          <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
            <div style={{width:18,height:18,border:`2px solid ${TEAL}`,borderRadius:4,flexShrink:0,marginTop:1}}/>
            <p style={{color:"#444",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

// STAR
const STAR_EXAMPLES=[
  {label:"Teamwork",question:"Tell me about a time you worked as part of a team to achieve a challenging goal.",
   weak:"I worked in a team at school on a project. We all had different roles and we worked together to get it done. The project went well.",
   good:"In S6, I was part of a team that organised our school charity fundraising event. I was responsible for logistics. We raised £2,400 — 40% more than the previous year.",
   strong:"During S6, I was part of a team of six students organising our school's annual charity fundraising event. I volunteered to take responsibility for logistics — booking the venue, managing the schedule and coordinating with the catering supplier — because I recognised that the previous year's event had struggled with last-minute organisational problems.\n\nI created a detailed project plan with clear deadlines and held weekly check-in meetings to track progress. Three weeks before the event, our original caterer cancelled. Rather than wait for someone else to solve the problem, I researched and contacted four alternative suppliers the same day, negotiated a comparable price with two-weeks' notice, and confirmed an alternative within 48 hours — without significantly disrupting the rest of the team.\n\nThe event raised £2,400 — 40% more than the previous year — and received positive feedback from staff and students. The experience taught me that effective teamwork requires proactive ownership of specific responsibilities and the ability to manage unexpected problems without transferring pressure to others.",
   why:"The weak answer is completely generic. The strong answer demonstrates proactive ownership, a specific crisis management example with a timeline, a quantified outcome, and genuine reflection. GA interviewers are assessing degree-level potential — this level of depth is what they expect."},
  {label:"Problem solving",question:"Describe a situation where you identified a problem and took action to resolve it.",
   weak:"I noticed a problem at my part-time job and I told my manager about it. They sorted it out and things improved after that.",
   good:"At my retail job I noticed the stock replenishment process was causing us to run out of popular items at busy times. I suggested a different approach and my manager implemented it, which reduced the number of stock-outs.",
   strong:"During my part-time role at a garden centre, I noticed that the busiest weekend shifts consistently ran out of the top-selling 8–10 product lines before the afternoon rush — not because we lacked stock, but because replenishment happened on a fixed Monday-Wednesday-Friday schedule that did not account for weekend demand patterns.\n\nI collected data over four consecutive Saturdays — recording which lines sold out, at what time, and what the estimated lost revenue was. I calculated we were losing approximately £180–£220 of sales per busy Saturday from avoidable stock-outs. I then proposed a simple adjustment: pre-loading an additional half-unit of the top-8 lines on Friday afternoons.\n\nMy manager agreed to trial it for one month. Weekend stock-out incidents reduced by approximately 70%. The approach was adopted permanently.\n\nThe experience taught me to look for patterns behind isolated problems, quantify the impact before proposing solutions, and present evidence rather than opinion when trying to change an established process.",
   why:"This answer demonstrates systematic data collection, quantified problem-sizing, evidence-based proposal and measured outcome. These are the intellectual behaviours GA employers look for — they are hiring someone who will eventually hold a degree and contribute at a graduate level."},
  {label:"Managing competing demands",question:"Tell me about a time you successfully managed multiple competing priorities.",
   weak:"During my exams I had a lot going on at school and at work. I made a plan and managed to get everything done. I learned that planning is important.",
   good:"In S5 I had my Highers, a part-time job and was captain of the school football team. It was busy but I organised my time with a schedule and I managed to do well in my exams.",
   strong:"In my fifth year, I was simultaneously preparing for five Higher exams, working 12 hours per week at a local supermarket, and captaining the school football team which had a Scottish Cup run requiring six additional fixtures in the spring term.\n\nI recognised in February that these three commitments would peak simultaneously in April and May. I sat down and mapped every exam date, match fixture and work shift onto a single calendar. I then had honest conversations with my employer — requesting a temporary reduction to 8 hours per week during the exam fortnight — and with the team about shared responsibility for pre-match preparation.\n\nI achieved AABB in my Highers, the team reached the regional cup semi-final, and I maintained my employment throughout.\n\nThe experience taught me that managing competing demands starts with honest planning — identifying conflicts weeks in advance rather than reacting to them when they arrive.",
   why:"This answer is directly relevant to a GA assessor because the core demand of a GA is exactly this — managing work and degree study simultaneously. Demonstrating you have done it at school level, with reflection on the process, is powerful and directly applicable evidence."},
  {label:"Receiving feedback",question:"Describe a time you received critical feedback and what you did with it.",
   weak:"I received feedback from a teacher once about an essay. I took it on board and improved my work. I think it is important to be able to accept criticism.",
   good:"My Higher English teacher gave me detailed feedback pointing out that my analysis was surface-level. I was surprised because I had put a lot of work in. I rewrote the essay using her suggestions and my grade improved significantly.",
   strong:"In my Higher English coursework, I received detailed written feedback on an essay I had worked hard on and felt confident about. The feedback identified that while my writing was technically strong, my analysis was 'descriptive rather than analytical' — I was summarising what happened rather than exploring why it mattered.\n\nMy initial reaction was defensiveness. But rather than dismiss the feedback, I spent an evening identifying every specific point raised. I then researched what analytical writing at Higher level actually required, found two model essays online, and annotated them to understand the precise difference between what I was doing and what was expected.\n\nI rewrote the essay from scratch. My grade improved from a C to an A. More importantly, I applied the same analytical framework to my remaining coursework and achieved an A overall.\n\nThe experience taught me that feedback is most useful when you resist the defensive impulse, identify the precise gap between your current performance and the expected standard, and take deliberate action rather than vague 'improvement'.",
   why:"GA assessors look for intellectual maturity. This answer demonstrates the ability to receive uncomfortable feedback without dismissing it, to research and understand a performance gap precisely, and to transfer learning to new contexts. These are graduate-level behaviours."},
];

function STARModule(){
  const [active,setActive]=useState(0);
  const [tier,setTier]=useState("strong");
  const ex=STAR_EXAMPLES[active];
  const tierCol={weak:RUST,good:AMBER,strong:GREEN};
  const tierBg={weak:"#FEF2F2",good:"#FFFBEB",strong:"#F0FDF4"};
  return (
    <div>
      <PageHeader icon="⭐" title="STAR Examples" subtitle="Four GA-level worked examples — GA interviewers assess degree-level potential, not just enthusiasm."/>
      <InfoBox text="GA interviewers expect more depth, more specificity and more genuine reflection than MA interviewers. The same experience told two ways — the difference is the level of analytical thinking you demonstrate." type="gold"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
        {[{l:"S",w:"Situation",d:"Scene briefly — 20% of answer."},{l:"T",w:"Task",d:"Your specific role or responsibility."},{l:"A",w:"Action",d:"What YOU did. Specific. Use 'I'. 50% of answer."},{l:"R",w:"Result",d:"Outcome + what you learned. Quantify."}].map((item,i)=>(
          <div key={i} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:12}}>
            <div style={{width:30,height:30,borderRadius:6,background:GOLD,color:WHITE,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:16,marginBottom:6}}>{item.l}</div>
            <p style={{color:NAVY,fontWeight:700,fontSize:12,margin:"0 0 3px",textTransform:"uppercase"}}>{item.w}</p>
            <p style={{color:MID,fontSize:12,margin:0}}>{item.d}</p>
          </div>
        ))}
      </div>
      <NavTabBar options={STAR_EXAMPLES.map((e,i)=>({id:i,label:e.label}))} active={active} onSelect={(id)=>{setActive(id);setTier("strong");}}/>
      <Card><p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p><p style={{color:NAVY,fontWeight:800,fontSize:15,margin:0}}>"{ex.question}"</p></Card>
      <div style={{display:"flex",gap:6,marginBottom:12}}>
        {["weak","good","strong"].map(t=>(
          <button key={t} onClick={()=>setTier(t)} style={{flex:1,padding:"8px 4px",background:tier===t?tierCol[t]:WHITE,border:`2px solid ${tierCol[t]}`,color:tier===t?(t==="good"?NAVY:WHITE):tierCol[t],borderRadius:8,fontWeight:700,fontSize:11,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {t==="weak"?"✗ Weak":t==="good"?"◎ Good":"✓ Strong"}
          </button>
        ))}
      </div>
      <div style={{background:tierBg[tier],borderLeft:`3px solid ${tierCol[tier]}`,borderRadius:10,padding:14,marginBottom:12}}>
        <p style={{color:tierCol[tier],fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>{tier==="weak"?"Weak answer":tier==="good"?"Good answer":"Strong answer"}</p>
        <p style={{color:"#333",fontSize:14,lineHeight:1.75,margin:0,fontStyle:"italic",whiteSpace:"pre-line"}}>"{ex[tier]}"</p>
      </div>
      <div style={{background:"#FFFBEB",borderLeft:`3px solid ${GOLD}`,borderRadius:8,padding:12,marginBottom:16}}>
        <p style={{color:GOLD,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 4px"}}>Coach commentary</p>
        <p style={{color:"#78350F",fontSize:13,lineHeight:1.65,margin:0}}>{ex.why}</p>
      </div>
    </div>
  );
}

// INTERVIEW
const INTERVIEW_QS=[
  {q:"Why do you want to do a Graduate Apprenticeship rather than going to university full-time?",tip:"The most important question in every GA interview. Must be specific, genuine and demonstrate you understand what a GA involves.",weak:"I want to earn while I learn and I do not want to get into debt. I think I will learn better in a working environment.",strong:"I have thought carefully about both routes and I am choosing a GA for three specific reasons. First, the evidence base for work-integrated learning is compelling — the academic content I study will be directly applicable the following day at work, accelerating both understanding and practical competence. Second, four years of relevant experience at Babcock Engineering, combined with a BEng Hons, positions me significantly differently from a traditional graduate with no industry exposure. Third, I have researched the financial reality: the absence of student debt combined with four years of earnings and pension contributions is a meaningful long-term advantage. What I want to be clear about is that I am not choosing this route because it seems easier — I understand it demands more than either option alone."},
  {q:"How will you manage the demands of working full-time and studying for a degree simultaneously?",tip:"Do not give a vague answer about time management. Give a specific system and evidence you have managed competing demands before.",weak:"I am good at managing my time. I will make a plan and stick to it. I handled my Highers alongside a part-time job so I know I can manage pressure.",strong:"I have already stress-tested my capacity for managing competing demands. In S5 and S6, I maintained a part-time job, captained the school football team and achieved four Highers at AABB — I did this by mapping every commitment onto a single calendar at the start of each term and having honest conversations with employers and coaches when conflicts arose. For the GA, I intend to use the same approach with more sophisticated systems: a weekly review of all academic deadlines mapped against work commitments, proactive communication with my line manager and academic tutor at the start of every semester, and treating university deadlines with the same non-negotiable status as work commitments."},
  {q:"What do you know about our organisation and why do you want to work here specifically?",tip:"Generic enthusiasm will fail. Know something specific — a project, a value, a recent development — and connect it to your genuine motivation.",weak:"I have researched your company and I know you are a leader in your sector. I like your values around innovation and I think you would be a great place to develop my career.",strong:"I have researched Babcock International specifically for this interview. I know the Rosyth shipyard is central to the Type 31 frigate programme and that Babcock has a commitment to growing engineering talent in Scotland through structured development programmes. What specifically interests me is the progression I read about on your website — an engineer who joined as an apprentice twelve years ago and is now leading the hydraulic systems team. That trajectory, from apprentice to specialist team leader within the same organisation, is exactly what I am aiming for. I am also specifically motivated by defence engineering — the precision and safety-criticality of the work appeals to how I naturally approach technical problems."},
  {q:"Describe a time you had to learn something complex with limited support.",tip:"Assesses self-directed learning capacity — critical for GA success. Be specific about what you learned, how and what you achieved.",weak:"I taught myself to code in Python by watching YouTube videos. I found it challenging at first but I stuck with it and got better.",strong:"When I decided to apply for a Software Development GA, I identified I needed to demonstrate practical coding ability beyond my school curriculum. I set myself a structured 10-week project: build a functional web application for the community garden near my home to allow volunteers to book slots and track planting activity.\n\nI had no prior web development experience. I mapped what I needed to learn — Python Flask for the backend, SQLite for the database, HTML/CSS for the front end — then found structured resources for each: CS50x for the foundation, Flask documentation for implementation, Stack Overflow for debugging. I committed to two hours every Saturday morning.\n\nThe application took 14 weeks, not 10 — I significantly underestimated the complexity of user authentication. But I completed it. It is live, used by approximately 40 volunteers, and documented on my GitHub. The experience taught me that self-directed learning requires a concrete project goal — and that encountering problems you cannot immediately solve is not failure, it is the process."},
  {q:"Where do you see yourself in five years, and how does this GA help you get there?",tip:"Show genuine career planning. Connect the GA specifically to your five-year goal — do not give a vague answer.",weak:"In five years I see myself working as an engineer. I hope to have progressed within the company and be taking on more responsibility. This GA will give me the qualification and experience I need.",strong:"In five years, my goal is to be a qualified engineer working on safety-critical systems in the defence or energy sector — at a level where I am beginning to take ownership of specific technical projects. I am targeting Incorporated Engineer status through IMechE, which this BEng Hons programme provides a pathway towards.\n\nThis GA specifically helps in three ways. First, the degree gives me the theoretical foundation — thermodynamics, materials science, CAD — that I cannot build in the workplace alone. Second, four years of practical experience at Babcock means I graduate with context for that knowledge that traditional graduates spend their first two years acquiring. Third, the professional network I build during the GA is a direct route to the development opportunities I will need for IEng application."},
  {q:"What questions do you have for us?",tip:"GA interviewers are senior professionals assessing your intellectual curiosity and seriousness about the role. Never say none.",weak:"No, I think you have covered everything. Thank you for your time.",strong:"I have three questions. First — could you describe what the supervision and mentoring structure looks like for GA apprentices in the first year? I am interested specifically in how the academic and workplace components are coordinated. Second — what does progression look like for someone who completes this GA and stays with Babcock? I have read the case study about the engineer who moved from apprentice to team lead in twelve years, but I am interested in what the typical trajectory looks like. Third — are there opportunities during the GA to work across different teams or engineering disciplines, or is the placement primarily within one team throughout?"},
];

function InterviewModule(){
  const [current,setCurrent]=useState(0);
  const [reveal,setReveal]=useState(null);
  const q=INTERVIEW_QS[current];
  return (
    <div>
      <PageHeader icon="🎤" title="Interview Preparation" subtitle="GA interviews are more demanding than MA interviews — they assess degree-level potential, not just enthusiasm."/>
      <InfoBox text="GA interviewers are senior professionals assessing whether you can operate at degree level while contributing from day one. Vague answers fail. Specificity, evidence and genuine analytical thinking succeed." type="info"/>
      <NavTabBar options={INTERVIEW_QS.map((_,i)=>({id:i,label:`Q${i+1}`}))} active={current} onSelect={(id)=>{setCurrent(id);setReveal(null);}}/>
      <Card>
        <p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p>
        <p style={{color:NAVY,fontWeight:800,fontSize:15,margin:"0 0 12px"}}>"{q.q}"</p>
        <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 11px"}}>
          <p style={{color:"#92400E",fontSize:13,lineHeight:1.6,margin:0}}>💡 <strong>Coach tip:</strong> {q.tip}</p>
        </div>
      </Card>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <button onClick={()=>setReveal(reveal==="strong"?null:"strong")} style={{flex:1,padding:10,background:reveal==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:reveal==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="strong"?"Hide":"✓ Strong"}</button>
        <button onClick={()=>setReveal(reveal==="weak"?null:"weak")} style={{flex:1,padding:10,background:reveal==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:reveal==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="weak"?"Hide":"✗ Weak"}</button>
      </div>
      {reveal==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Strong Answer</p><p style={{color:"#14532D",fontSize:14,lineHeight:1.7,margin:0,whiteSpace:"pre-line"}}>{q.strong}</p></div>}
      {reveal==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Weak Answer</p><p style={{color:"#7F1D1D",fontSize:14,lineHeight:1.7,margin:0}}>{q.weak}</p></div>}
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 8px",textTransform:"uppercase"}}>🎤 Practise your answer</p>
        <textarea placeholder="Type your answer here..." rows={4} style={{width:"100%",background:GREY,border:"1px solid #E2E8F0",borderRadius:8,padding:12,color:NAVY,fontSize:13,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box"}}/>
        <p style={{color:MID,fontSize:12,marginTop:8,marginBottom:0}}>💡 Paste into the AI Coach for detailed feedback.</p>
      </Card>
    </div>
  );
}

// IF STRUGGLING
function StrugglingModule(){
  return (
    <div>
      <PageHeader icon="💙" title="If You Struggle" subtitle="What to do when the workload becomes unmanageable — honest guidance that most programmes do not provide."/>
      <InfoBox text="The demands of a Graduate Apprenticeship are real. Most apprentices find the first year the most challenging. Struggling does not mean you are wrong for the programme — it means you are human. What matters is what you do next." type="info"/>
      <Accordion accent={TEAL} items={[
        {title:"The tripartite agreement — your protection",content:"Every Graduate Apprenticeship is governed by a tripartite agreement between you, your employer and the university. This agreement exists specifically to ensure all three parties support your success.\n\nWhat this means:\n• Your employer is legally required to give you time to attend university and complete academic work during normal working hours. They cannot require you to study entirely in your own time.\n• Your university assigns you a personal academic tutor — there to support you, not just assess you.\n• Your employer provides a workplace mentor throughout the programme.\n\nIf you are struggling, you have the right to raise concerns through these formal channels. The tripartite agreement gives you protection that a standard employee would not have."},
        {title:"Warning signs — act now, not later",content:"Many apprentices wait too long before asking for help. Warning signs requiring immediate action:\n\nAcademic:\n• You have missed more than one university deadline\n• You have stopped attending classes or tutorials\n• You are failing assessments and not engaging with feedback\n\nWork:\n• Your work performance is suffering because of study pressure\n• Your relationship with your line manager has become strained\n\nPersonal:\n• You are consistently unable to sleep or sleeping excessively\n• You have stopped activities that previously gave you pleasure\n• You are regularly overwhelmed or experiencing anxiety that interferes with daily functioning\n\nIf you recognise more than two of these, act immediately. The longer you wait, the harder it becomes."},
        {title:"Who to contact and what to say",content:"Step 1 — Your university personal tutor\nEmail them: 'I am finding the current workload very difficult to manage alongside my work commitments. I would like to arrange a meeting to discuss my situation and what support is available.'\n\nThey can: extend deadlines, discuss academic support services, connect you with wellbeing services, adjust your academic plan, and communicate with the employer on your behalf.\n\nStep 2 — Your workplace mentor\nBe honest about the academic pressure. A good mentor can adjust your workload temporarily, advocate with your line manager, and share their own experience of the demands.\n\nStep 3 — Your line manager\nIf academic commitments are genuinely unmanageable alongside current work responsibilities, your employer has an obligation to discuss this with you.\n\nStep 4 — University wellbeing service\nIf the issue is mental health or personal circumstances — contact the university's wellbeing service directly. These services are confidential."},
        {title:"Taking a break — your options",content:"Taking a break from a GA is possible and is not the end of the road.\n\nAcademic interruption: Most universities offer a formal interruption of studies process — a temporary suspension of your programme for one semester or one year. You may remain employed during this time.\n\nWithdrawal: In some cases, apprentices may decide to withdraw from the academic programme entirely. This does not necessarily mean leaving the employer — many continue in employment, sometimes completing a lower-level qualification instead. Speak to your university and employer together before making this decision.\n\nIf you withdraw, any funded tuition for completed academic years is not recovered from you personally."},
        {title:"Sustainable habits throughout the programme",content:"Prevention is better than intervention:\n\n• Create a comprehensive semester schedule at the start — map all academic deadlines against work commitments before they arrive\n• Share your academic calendar with your line manager at the start of each semester\n• Use your workplace mentor proactively — do not save conversations for when things are going wrong\n• Protect your recovery time — the temptation to study every evening is understandable but counterproductive over 4–5 years\n• Maintain at least one regular non-work, non-study activity throughout\n• Build a peer support network with other GA apprentices — others in your cohort understand the demands in a way that family and colleagues often do not\n\nResources:\n• Breathing Space (free, confidential): 0800 83 85 87\n• SAMH (Scottish Association for Mental Health): samh.org.uk\n• Your university wellbeing service"},
      ]}/>
    </div>
  );
}

// COACHING
function CoachingModule(){
  const [stage,setStage]=useState("pre");
  const stages={
    pre:{label:"Pre-application",icon:"🔍",groups:[
      {category:"Self-discovery",questions:["What subjects at school do I genuinely enjoy, and what does that tell me about my strengths?","When I imagine myself at work in ten years, what am I doing and what environment am I in?","What are the three things that matter most to me in a job — salary, creativity, helping others, problem-solving, working with technology?","Have I done the Am I Ready self-assessment honestly? What did the results tell me?","What additional skills or experiences could I develop before applying to strengthen my application?"]},
      {category:"Research and exploration",questions:["Have I explored all 15 GA frameworks? Which two or three align most closely with my interests?","Have I spoken to anyone currently working in the sector I am considering?","Have I visited apprenticeships.scot and looked at real current GA vacancies in my preferred framework?","What specific employer am I most interested in, and what do I know about them beyond their homepage?"]},
    ]},
    during:{label:"During the GA",icon:"📚",groups:[
      {category:"Performance and development",questions:["What are the three most important things I have learned this month — at work and at university?","What feedback have I received recently, and what specific actions am I taking to act on it?","Am I making the most of my workplace mentor? What questions should I bring to our next meeting?","How is my university learning connecting to my day-to-day work? Can I identify a specific example from this week?"]},
      {category:"Wellbeing and resilience",questions:["Am I managing my workload effectively? If not, what specific changes can I make?","Who are the people — at work, at university and at home — who support me? Have I been open with them about challenges?","What do I do to recharge and look after my mental health? Am I making enough time for this?","What is one thing I am proud of from the past month, and how can I build on it?"]},
    ]},
    post:{label:"Post-completion",icon:"🚀",groups:[
      {category:"Career vision",questions:["What kind of professional do I want to be in five years? What specific role or specialism am I aiming for?","What professional accreditation — RICS, ACCA, IEng, CISSP — would most enhance my career, and what is my plan for achieving it?","Have I built a strong professional network during my GA? Who are the key people to stay connected with?","Am I considering staying with my current employer, moving to a new organisation, or exploring self-employment?"]},
      {category:"Further development",questions:["Is a Master's degree something that would benefit my career? If yes, what is the right timing and programme?","What does chartered or fellow status look like in my profession, and what is the pathway from where I am?","What leadership or management development would help me progress from specialist to senior in the next 3–5 years?"]},
    ]},
  };
  const s=stages[stage];
  return (
    <div>
      <PageHeader icon="🧭" title="Coaching Prompts" subtitle="Three-stage reflective framework — pre-application, during the programme and post-completion."/>
      <InfoBox text="These prompts work best used with a careers adviser or mentor. They can also be used independently — set aside 20 minutes, write your answers and review them monthly." type="info"/>
      <div style={{display:"flex",gap:8,marginBottom:16}}>
        {Object.entries(stages).map(([k,v])=>(
          <button key={k} onClick={()=>setStage(k)} style={{background:stage===k?NAVY:WHITE,color:stage===k?WHITE:MID,border:`1px solid ${stage===k?NAVY:"#E2E8F0"}`,borderRadius:10,padding:"10px 12px",cursor:"pointer",fontFamily:"inherit",flex:1,fontWeight:700,fontSize:11,textAlign:"center"}}>
            {v.icon} {v.label}
          </button>
        ))}
      </div>
      {s.groups.map((group,i)=>(
        <Card key={i}>
          <p style={{color:GOLD,fontWeight:700,fontSize:12,margin:"0 0 12px",textTransform:"uppercase",letterSpacing:0.5}}>{group.category}</p>
          {group.questions.map((q,j)=>(
            <div key={j} style={{display:"flex",gap:10,marginBottom:10,alignItems:"flex-start",paddingBottom:10,borderBottom:j<group.questions.length-1?"1px solid #F0F4F8":"none"}}>
              <div style={{width:22,height:22,background:AMBER+"20",color:"#92400E",borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:700,flexShrink:0}}>{j+1}</div>
              <p style={{color:NAVY,fontSize:13,lineHeight:1.6,margin:0}}>{q}</p>
            </div>
          ))}
        </Card>
      ))}
    </div>
  );
}

// AI COACH
function CoachModule(){
  const [messages,setMessages]=useState([{role:"assistant",content:"I am your TASS Graduate Apprenticeship Coach.\n\nI can help you with:\n• Deciding whether a GA is right for you — honest assessment of your situation\n• Choosing the right framework for your background and goals\n• Application strategy — personal statement, CV, covering letter\n• Interview preparation — mock GA interviews at the right level of depth\n• STAR answer building — at the more demanding level GA interviews expect\n• Managing the dual demands — practical strategies for balancing work and study\n• What to do if you are struggling — honest guidance on your options\n\nGA interviews are more demanding than standard MA interviews. Tell me where you are in the process and I will give you specific, practical guidance."}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[messages]);

  const PROMPTS=["Is a GA right for me? I have 4 Highers at BBBB","Run a mock GA interview","Give feedback on my personal statement","Which framework — IT or Engineering?","How do I manage work and degree study?","What if I start struggling during the programme?"];

  async function send(){
    if(!input.trim()||loading)return;
    const userMsg=input.trim(); setInput("");
    const newMsgs=[...messages,{role:"user",content:userMsg}];
    setMessages(newMsgs); setLoading(true);
    try{
      const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        model:"claude-sonnet-4-5-20250929",max_tokens:1000,
        system:`You are the TASS Graduate Apprenticeship Coach — a direct, expert careers coach helping young people (16–29) and career changers in Scotland navigate Graduate Apprenticeships.

Your approach:
- Specific and direct — no vague encouragement. Give actual next steps.
- Honest — GA is demanding. You do not oversell it. If someone is not suited to a GA right now, say so clearly.
- Scotland-specific: you know all 15 Scottish GA frameworks, the SCQF framework (Levels 9–11), SAAS funding, SFC guidance, key universities (Strathclyde, Heriot-Watt, Edinburgh Napier, Glasgow, GCU, RGU, Dundee, UWS), and major GA employers (JP Morgan, ScottishPower, Leonardo, Babcock, BAE Systems, NHS Scotland, Scottish Government, Balfour Beatty, Aegon UK).
- GA vs MA aware: you can clearly explain the difference and help candidates decide which route suits them.
- Interview expertise: GA interviews are more demanding than MA interviews. You know what degree-level potential looks like in an answer.
- Wellbeing aware: you know the tripartite agreement, workplace mentor and academic tutor roles, and options when struggling.

When running mock interviews:
- Ask one question at a time from the GA-specific question bank
- After each answer: what demonstrated degree-level thinking, what was generic, then show an improved version
- Most important GA questions: 'Why GA rather than university?', 'How will you manage work and study?', 'Why this specific employer?'

When reviewing personal statements:
- Check for: specific employer named, specific framework named, evidence of managing competing demands, academic credentials with grades, genuine motivation beyond 'earn while I learn'

Key things to reinforce:
- GA applications are more competitive than MA applications — generic applications fail
- The Am I Ready self-assessment is important — not everyone is suited to a GA right now
- The tripartite agreement protects apprentices — struggling students should use it
- Professional accreditation (RICS, ACCA, IEng) is a significant long-term benefit worth planning for

Keep responses focused and mobile-friendly.`,
        messages:newMsgs.map(m=>({role:m.role,content:m.content}))
      })});
      const data=await res.json();
      const reply=data.content?.[0]?.text||"Connection issue — please try again.";
      setMessages([...newMsgs,{role:"assistant",content:reply}]);
    }catch(error){setMessages([...newMsgs,{role:"assistant",content:`Connection issue — please try again. (${error.message})`}]);}
    setLoading(false);
  }

  return (
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 180px)",minHeight:480}}>
      <div style={{background:"#FFFBEB",borderLeft:`3px solid ${GOLD}`,borderRadius:8,padding:"9px 13px",marginBottom:10}}>
        <p style={{color:"#78350F",fontSize:13,margin:0}}>💡 Tell me where you are — deciding, applying, preparing or already in a GA. The more specific you are, the more useful the guidance.</p>
      </div>
      <div style={{display:"flex",gap:6,marginBottom:10,overflowX:"auto",paddingBottom:4}}>
        {PROMPTS.map((p,i)=><button key={i} onClick={()=>setInput(p)} style={{background:GOLD+"20",border:`1px solid ${GOLD}50`,color:"#78350F",borderRadius:99,padding:"5px 11px",whiteSpace:"nowrap",fontSize:11,fontWeight:600,cursor:"pointer",flexShrink:0,fontFamily:"inherit"}}>{p}</button>)}
      </div>
      <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:12,paddingRight:4,paddingBottom:8}}>
        {messages.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"88%",padding:"10px 14px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",background:m.role==="user"?NAVY:WHITE,color:m.role==="user"?WHITE:NAVY,fontSize:13,lineHeight:1.7,whiteSpace:"pre-wrap",border:m.role==="assistant"?"1px solid #E2E8F0":"none",boxShadow:m.role==="assistant"?"0 1px 4px rgba(0,0,0,0.06)":"none"}}>{m.content}</div>
          </div>
        ))}
        {loading&&<div style={{display:"flex",justifyContent:"flex-start"}}><div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:"14px 14px 14px 4px",padding:"11px 15px",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}><div style={{display:"flex",gap:4}}>{[0,1,2].map(i=><div key={i} style={{width:6,height:6,background:TEAL,borderRadius:99,animation:`b 1.2s ${i*0.2}s infinite`}}/>)}</div></div></div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{display:"flex",gap:8,marginTop:10}}>
        <textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} placeholder="Ask your coach anything, or paste your personal statement for feedback..." rows={3} style={{flex:1,background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:"10px 13px",color:NAVY,fontSize:13,fontFamily:"inherit",resize:"none",minHeight:60,boxSizing:"border-box",lineHeight:1.65}}/>
        <button onClick={send} disabled={loading||!input.trim()} style={{background:input.trim()?TEAL:"#E2E8F0",border:"none",color:input.trim()?WHITE:"#999",borderRadius:10,padding:"0 16px",cursor:input.trim()?"pointer":"default",fontSize:20}}>↑</button>
      </div>
      <style>{`@keyframes b{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}`}</style>
    </div>
  );
}

// APP
export default function TASSGraduate(){
  const [tab,setTab]=useState("home");
  const current=TABS.find(t=>t.id===tab);
  return (
    <div style={{fontFamily:"'Segoe UI', system-ui, sans-serif",background:GREY,minHeight:"100vh",color:NAVY}}>
      <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: ${GREY}; } ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; } textarea:focus, button:focus { outline: 2px solid ${TEAL}; outline-offset: 2px; }`}</style>
      {tab!=="home"&&(
        <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,padding:"12px 16px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>
          <TASSLogo size="sm" theme="dark"/>
          <div style={{width:1,height:32,background:"rgba(255,255,255,0.15)",margin:"0 4px"}}/>
          <div style={{flex:1}}>
            <div style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:0.5}}>Graduate Apprenticeship</div>
            <div style={{color:WHITE,fontSize:13,fontWeight:700,marginTop:2}}>{current?.icon} {current?.label}</div>
          </div>
          <button onClick={()=>setTab("home")} style={{
            display:"flex",flexDirection:"column",alignItems:"center",gap:2,
            background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.2)",
            borderRadius:8,padding:"5px 10px",cursor:"pointer",flexShrink:0,fontFamily:"inherit",
          }}>
            <span style={{fontSize:14}}>⬅️</span>
            <span style={{color:"rgba(255,255,255,0.8)",fontSize:8,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,whiteSpace:"nowrap"}}>Module</span>
          </button>
          <a href="https://theapprenticeshipsuccesssystem.co.uk" style={{
            display:"flex",flexDirection:"column",alignItems:"center",gap:2,
            textDecoration:"none",background:"rgba(255,255,255,0.1)",
            border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,padding:"5px 10px",flexShrink:0,
          }}>
            <span style={{fontSize:14}}>🏠</span>
            <span style={{color:"rgba(255,255,255,0.8)",fontSize:8,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,whiteSpace:"nowrap"}}>All Modules</span>
          </a>
        </div>
      )}
      <div style={{maxWidth:640,margin:"0 auto",padding:"20px 16px 110px"}}>
        {tab==="home"       &&<HomeModule setTab={setTab}/>}
        {tab==="what"       &&<WhatModule/>}
        {tab==="compare"    &&<CompareModule/>}
        {tab==="frameworks" &&<FrameworksModule/>}
        {tab==="ready"      &&<ReadyModule/>}
        {tab==="apply"      &&<ApplyModule/>}
        {tab==="mjs"        &&<MJSModule/>}
        {tab==="cv"         &&<CVModule/>}
        {tab==="star"       &&<STARModule/>}
        {tab==="interview"  &&<InterviewModule/>}
        {tab==="struggling" &&<StrugglingModule/>}
        {tab==="coaching"   &&<CoachingModule/>}
        {tab==="coach"      &&<CoachModule/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:WHITE,borderTop:"1px solid #E2E8F0",display:"flex",justifyContent:"center",padding:"8px 2px 12px",zIndex:100,boxShadow:"0 -2px 12px rgba(0,0,0,0.06)"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,maxWidth:46,background:"none",border:"none",cursor:"pointer",padding:"5px 2px",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
            <div style={{fontSize:12,filter:tab===t.id?"none":"grayscale(1) opacity(0.3)"}}>{t.icon}</div>
            <div style={{fontSize:6,color:tab===t.id?TEAL:"#999",fontWeight:tab===t.id?800:400,textTransform:"uppercase",letterSpacing:"0.02em"}}>{t.label.substring(0,4)}</div>
            {tab===t.id&&<div style={{width:12,height:2,background:TEAL,borderRadius:2}}/>}
          </button>
        ))}
      </div>
    </div>
  );
}
