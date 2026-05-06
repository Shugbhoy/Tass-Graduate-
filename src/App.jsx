import { useState, useRef, useEffect } from "react";

const NAVY  = "#0D1B3E";
const TEAL  = "#1A9E8F";
const AMBER = "#F4A623";
const RUST  = "#C0392B";
const GREEN = "#1A6B3A";
const PLUM  = "#6B21A8";
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
  {id:"what",      icon:"🎓", label:"What is a GA"},
  {id:"vsma",      icon:"⚖️",  label:"GA vs MA"},
  {id:"frameworks",icon:"📋", label:"Frameworks"},
  {id:"ready",     icon:"✅", label:"Am I Ready"},
  {id:"apply",     icon:"📝", label:"Apply"},
  {id:"mjs",       icon:"🏛️",  label:"MyJobScot"},
  {id:"cv",        icon:"📄", label:"CV"},
  {id:"star",      icon:"⭐", label:"STAR"},
  {id:"interview", icon:"🎤", label:"Interview"},
  {id:"coaching",  icon:"🧠", label:"Coaching"},
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
  const s={tip:{bg:"#FFFBEB",border:AMBER,col:"#92400E"},info:{bg:"#EFF6FF",border:TEAL,col:"#1A5276"},success:{bg:"#F0FDF4",border:GREEN,col:"#14532D"},warning:{bg:"#FEF2F2",border:RUST,col:"#7F1D1D"},purple:{bg:"#FAF5FF",border:PLUM,col:"#581C87"}}[type]||{bg:"#FFFBEB",border:AMBER,col:"#92400E"};
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
      {show==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:8,padding:"12px 14px",marginBottom:8}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 6px"}}>Weak — vague, no evidence</p><p style={{color:"#7F1D1D",fontSize:13,lineHeight:1.7,margin:0,fontStyle:"italic"}}>{weak}</p></div>}
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

// ─── HOME ─────────────────────────────────────────────────────────────────────
function HomeModule({setTab}){
  const cards=[
    {id:"what",      icon:"🎓",title:"What is a GA?",           desc:"The earn-while-you-learn degree — how it works, what you get, who funds it"},
    {id:"vsma",      icon:"⚖️", title:"GA vs MA",               desc:"The honest side-by-side comparison most candidates never see"},
    {id:"frameworks",icon:"📋",title:"15 Frameworks",           desc:"Every GA pathway in Scotland — universities, employers and salaries"},
    {id:"ready",     icon:"✅",title:"Am I Ready?",             desc:"An honest self-assessment — the dual demands, the warning signs, the checklist"},
    {id:"apply",     icon:"📝",title:"How to Apply",            desc:"Step-by-step from vacancy search to offer — including the full timeline"},
    {id:"mjs",       icon:"🏛️", title:"MyJobScotland",          desc:"Public sector GA roles — Scottish Government, NHS, councils"},
    {id:"cv",        icon:"📄",title:"CV and Cover Letter",     desc:"Weak vs strong examples — what GA employers actually look for"},
    {id:"star",      icon:"⭐",title:"STAR Examples",           desc:"Four GA-level worked examples — more sophisticated than standard MA prep"},
    {id:"interview", icon:"🎤",title:"Interview Prep",          desc:"Competency, technical and motivational questions with strong answers"},
    {id:"coaching",  icon:"🧠",title:"Coaching Prompts",        desc:"Three-stage reflective framework — before, during and after your GA"},
    {id:"coach",     icon:"🤖",title:"AI Coach",               desc:"Personalised help — CV, STAR answers, interview practice, framework guidance"},
  ];
  return (
    <div>
      <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,borderRadius:14,padding:"32px 20px 28px",display:"flex",justifyContent:"center",marginBottom:20}}>
        <TASSLogo size="lg" theme="dark"/>
      </div>
      <Card style={{borderLeft:`4px solid ${PLUM}`,background:"#FAF5FF"}}>
        <p style={{color:"#581C87",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:0.5,margin:"0 0 4px"}}>Graduate Apprenticeship</p>
        <p style={{color:NAVY,fontSize:14,lineHeight:1.7,margin:0}}>A Graduate Apprenticeship gives you a full university degree and years of paid professional experience — simultaneously, without tuition debt. This module covers every stage: understanding what a GA is, choosing the right framework, applying, writing your CV, preparing for interview, and thriving once you start.</p>
      </Card>
      <Card style={{borderLeft:`4px solid ${TEAL}`,background:"#EFF6FF",marginBottom:20}}>
        <p style={{color:"#1A5276",fontWeight:700,fontSize:13,margin:"0 0 4px",textTransform:"uppercase",letterSpacing:0.5}}>Start here</p>
        <p style={{color:"#1A5276",fontSize:13,lineHeight:1.65,margin:0}}>Read <strong>What is a GA?</strong> first if you are new to this route. Then <strong>Am I Ready?</strong> — the section most candidates skip and most regret. Use the <strong>AI Coach</strong> at any stage for personalised guidance.</p>
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

// ─── WHAT IS A GA ─────────────────────────────────────────────────────────────
function WhatModule(){
  return (
    <div>
      <PageHeader icon="🎓" title="What is a Graduate Apprenticeship?" subtitle="The earn-while-you-learn degree — how it works, what you receive, and who pays for it."/>
      <Card style={{borderLeft:`4px solid ${PLUM}`,background:"#FAF5FF"}}>
        <p style={{color:"#581C87",fontWeight:800,fontSize:14,margin:"0 0 6px"}}>The simplest explanation</p>
        <p style={{color:"#581C87",fontSize:14,lineHeight:1.7,margin:0}}>You get a job. You earn a salary. Your employer gives you time to study at university. The Scottish Government pays your tuition fees. You graduate with a full honours degree and years of professional experience. You carry no tuition debt.</p>
      </Card>
      <Accordion accent={PLUM} items={[
        {title:"How a Graduate Apprenticeship actually works",content:"A Graduate Apprenticeship (GA) is a formal tripartite arrangement between three parties: you, your employer, and a Scottish university.\n\nYour employer:\n• Employs you on a full employment contract from day one\n• Pays your salary throughout the programme\n• Provides a workplace mentor\n• Gives you dedicated time for university study — typically one day per week or block release periods\n• Cannot require you to study entirely in your own time\n\nThe university:\n• Delivers your academic programme, mapped to your job role\n• Assesses your work-based projects alongside academic assignments\n• Provides a personal academic tutor\n• Awards you a fully recognised degree at the end\n\nThe Scottish Government (via SAAS):\n• Pays your tuition fees directly to the university\n• You do not receive a bill and you do not need a student loan for fees\n• You apply to SAAS each year to confirm your funding — this is straightforward\n\nYou:\n• Work for your employer the majority of the week (typically four days)\n• Dedicate the remaining time to university study\n• Complete work-based projects that count towards your degree\n• Graduate with an identical qualification to traditional full-time students from the same university"},
        {title:"The SCQF framework — what qualification level do you get?",content:"Graduate Apprenticeships are mapped to the Scottish Credit and Qualifications Framework (SCQF), Scotland's national qualification system.\n\nSCQF Level 9 — Ordinary Degree (BA, BSc): typically 3 years\nSCQF Level 10 — Honours Degree (BEng Hons, BSc Hons): typically 4 years\nSCQF Level 11 — Master's Degree (MSc): typically 5 years\n\nThe vast majority of GA frameworks lead to SCQF Level 10 — an Honours Degree. A small number of frameworks (notably Cyber Security at the University of Strathclyde) offer an integrated route to SCQF Level 11 (Master's level).\n\nCritically: the degree certificate you receive at the end of a GA is identical to one earned through traditional full-time study at the same university. There is no distinction. You graduate as a fully qualified professional with a full degree."},
        {title:"Who funds a GA and what does it cost you?",content:"Tuition fees: fully funded by the Scottish Government through the Student Awards Agency Scotland (SAAS). You pay nothing. The fees are paid directly to the university on your behalf. You must apply to SAAS each academic year — this is a straightforward process.\n\nSalary: paid by your employer throughout the programme. Starting salaries vary by sector and employer — see the Frameworks section for indicative figures.\n\nLiving costs: your responsibility, covered by your salary. Unlike traditional students, you are earning from day one.\n\nWhat you do not get:\n• A student loan for tuition fees (you don't need one)\n• The full SAAS bursary available to traditional students (because you are employed and earning)\n\nNet position compared to traditional university:\nA traditional Scottish student studying full-time incurs living costs — rent, food, transport — often funded through student loans. A GA is earning a salary throughout. The financial advantage over 4 years is typically £60,000–£100,000 in combined earnings and avoided debt, depending on employer and sector."},
        {title:"The work-study balance — the honest picture",content:"The demands of a GA should not be underestimated. You are working full-time and studying for a degree simultaneously. This is genuinely demanding.\n\nWhat this looks like in practice:\n• Monday–Thursday: at work, delivering real responsibilities\n• Friday (or equivalent): university study — lectures, seminars, online learning\n• Evenings and weekends: some university work will inevitably spill over, especially around deadlines\n• Year 1 is typically the hardest: adapting to professional workplace culture and university-level academic work simultaneously\n\nWhat makes it manageable:\n• The academic content is directly mapped to your job — you are not studying abstract theory, you are studying the application of your actual work\n• Your employer is required to support your study, not undermine it\n• Your university provides a personal academic tutor\n• Your employer provides a workplace mentor\n• The tripartite agreement (you, employer, university) exists precisely to ensure all parties support your success\n\nOne Heriot-Watt engineering apprentice described it: 'I started out with a salary of flat £18,000 per year which I was pretty chuffed with, and even prouder to admit I'm earning circa £22,500 per year 15 months later. I couldn't ask for a more accommodating company.'\n\nOne Strathclyde design engineer said: 'I'm in the fourth year of my GA and I've been able to learn soldering skills in the lab since day one. I get a good mix of practical experience and theoretical knowledge.'"},
        {title:"Entry requirements",content:"Entry requirements are set by individual universities and are broadly comparable to standard undergraduate requirements for the same degree.\n\nFor most SCQF Level 10 (Honours Degree) programmes you will typically need:\n• Four SQA Highers, often at grades BBBB or above\n• Specific subjects depending on the framework — Engineering and IT typically require Maths and at least one science (Physics, Computing Science, Chemistry); Business may require English and Maths\n• Some universities specify minimum grades in particular subjects (e.g., B in Maths for Engineering routes)\n\nAlternative entry pathways:\n• Foundation Apprenticeship (FA): completed during S5 or S6, some universities treat a completed FA as equivalent to a Higher in the relevant subject\n• HNC or HND: holders may be eligible for advanced entry into year 2, significantly shortening the programme\n• Recognition of Prior Learning (RPL): universities must consider relevant industry experience even without standard academic qualifications — genuinely accessible to career changers\n\nBeyond grades, employers and universities look for genuine interest in the field, willingness to commit to the dual demands, and the personal qualities needed to succeed in the workplace. A strong personal statement and interview can be as influential as academic grades."},
        {title:"What happens if you struggle?",content:"This is the question most guides do not answer honestly. Here is what actually happens.\n\nIf the workload becomes unmanageable:\n• Speak to your workplace mentor immediately — they are your first line of support and are required to help\n• Speak to your university personal tutor — they can grant extensions or agree a revised submission schedule\n• The tripartite agreement means your employer, university and you have shared responsibility for your success\n• Most GA programmes have early intervention processes — if you raise issues early, there is almost always a solution\n\nIf the employer relationship breaks down:\n• This is rare but does happen, particularly in smaller organisations\n• Contact your university programme coordinator — they maintain relationships with employers and can mediate\n• In serious cases, Skills Development Scotland (SDS) and the university can help facilitate a transfer to a new employer, though this is complex and not guaranteed\n• Your employment rights are the same as any other employee — redundancy, unfair dismissal protections apply\n\nIf your academic performance is suffering:\n• Most universities offer a resit opportunity for failed assessments\n• Some programmes allow you to interrupt study temporarily (leave of absence) with employer agreement\n• Failing to meet academic requirements may ultimately mean you cannot complete the degree — but this is a last resort, not a first response\n\nThe message: raise concerns early. The support structures exist. Using them is not weakness — it is exactly what they are there for."},
      ]}/>
    </div>
  );
}

// ─── GA vs MA ─────────────────────────────────────────────────────────────────
function VSMAModule(){
  const comparisons=[
    {aspect:"Qualification",ga:"Full university degree (SCQF Level 9, 10 or 11) — Honours Degree or Master's",ma:"SVQ (Scottish Vocational Qualification) at SCQF Level 5–8. Vocational, not academic."},
    {aspect:"Duration",ga:"3–5 years depending on framework and entry level",ma:"1–4 years depending on framework and entry level"},
    {aspect:"Tuition fees",ga:"Fully funded by Scottish Government (SAAS). You pay nothing.",ma:"No tuition fees — training is funded by SDS and employer levy. You pay nothing."},
    {aspect:"Salary",ga:"Paid by employer throughout. Typically £18,000–£28,000 starting.",ma:"Paid by employer throughout. Typically £14,000–£22,000 starting."},
    {aspect:"University involvement",ga:"Yes — a Scottish university delivers and awards your degree.",ma:"No — training delivered by college or training provider. SVQ assessed in workplace."},
    {aspect:"Entry requirements",ga:"Typically 4 SQA Highers at BBBB or above. Subject-specific requirements apply.",ma:"Usually 2–3 Highers or National 5s. Lower academic threshold."},
    {aspect:"Academic demand",ga:"Degree-level academic work alongside full-time employment. Significant.",ma:"Vocational assessment — work-based evidence, competence demonstration. Less academic."},
    {aspect:"Professional recognition",ga:"Honours Degree. Equivalent to traditional university. Pathway to chartered status.",ma:"SVQ qualification. Industry-recognised. Different pathway to professional status."},
    {aspect:"Post-qualification options",ga:"Direct employment, senior roles, professional accreditation, postgraduate study.",ma:"Qualified tradesperson status, further MAs, HNC/HND, then potentially GA."},
    {aspect:"Who it suits",ga:"Strong academic background, comfortable with dual demands, degree-level ambition.",ma:"Practical learner, sector-specific trade or skill focus, not seeking a degree."},
  ];
  const [view,setView]=useState("table");
  return (
    <div>
      <PageHeader icon="⚖️" title="GA vs MA" subtitle="The honest side-by-side comparison — which route is right for you?"/>
      <InfoBox text="Both are excellent routes. Neither is superior. The right choice depends entirely on your academic background, learning style, career goals and what you can realistically commit to." type="info"/>
      <div style={{display:"flex",gap:8,marginBottom:16}}>
        <button onClick={()=>setView("table")} style={{flex:1,padding:"9px 8px",background:view==="table"?NAVY:WHITE,border:`1px solid ${view==="table"?NAVY:"#E2E8F0"}`,color:view==="table"?WHITE:MID,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>Side by side</button>
        <button onClick={()=>setView("when")} style={{flex:1,padding:"9px 8px",background:view==="when"?NAVY:WHITE,border:`1px solid ${view==="when"?NAVY:"#E2E8F0"}`,color:view==="when"?WHITE:MID,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>When to choose each</button>
      </div>
      {view==="table"&&(
        <div>
          {comparisons.map((c,i)=>(
            <Card key={i} style={{padding:14}}>
              <p style={{color:PLUM,fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:0.5,margin:"0 0 8px"}}>{c.aspect}</p>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
                <div style={{background:"#FAF5FF",borderRadius:8,padding:"10px 12px"}}>
                  <p style={{color:PLUM,fontWeight:700,fontSize:10,textTransform:"uppercase",margin:"0 0 4px"}}>GA</p>
                  <p style={{color:"#3B0764",fontSize:13,lineHeight:1.5,margin:0}}>{c.ga}</p>
                </div>
                <div style={{background:GREY,borderRadius:8,padding:"10px 12px"}}>
                  <p style={{color:TEAL,fontWeight:700,fontSize:10,textTransform:"uppercase",margin:"0 0 4px"}}>MA</p>
                  <p style={{color:NAVY,fontSize:13,lineHeight:1.5,margin:0}}>{c.ma}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
      {view==="when"&&(
        <div>
          <Card style={{borderLeft:`4px solid ${PLUM}`,background:"#FAF5FF"}}>
            <p style={{color:PLUM,fontWeight:800,fontSize:14,margin:"0 0 10px"}}>Choose a GA if:</p>
            {["You have or expect 4 Highers at BBBB or above","You want a university degree as the end qualification","You are comfortable with academic work alongside full-time employment","You want access to professional accreditation (RICS, ACCA, CEng, CISSP)","You are aiming for management, specialist or chartered professional roles in the medium term","You want the degree without the debt or the career gap","You are a career changer with prior qualifications who wants to formalise knowledge at degree level"].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:8,marginBottom:6,alignItems:"flex-start"}}>
                <div style={{width:16,height:16,background:PLUM,borderRadius:99,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>
                  <span style={{color:WHITE,fontSize:9,fontWeight:900}}>✓</span>
                </div>
                <p style={{color:"#3B0764",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
              </div>
            ))}
          </Card>
          <Card style={{borderLeft:`4px solid ${TEAL}`,background:"#EFF6FF"}}>
            <p style={{color:TEAL,fontWeight:800,fontSize:14,margin:"0 0 10px"}}>Choose a Modern Apprenticeship (MA) if:</p>
            {["You do not have or expect 4 Highers at the required grades","You prefer practical, hands-on learning over academic study","You want a faster route to a qualified trade or technical role","You are interested in a specific trade (electrical, plumbing, construction) where an SVQ is the industry standard","You want to start earning and developing skills without degree-level academic pressure","You can progress to a GA later — many GA programmes accept HNC/HND holders at advanced entry"].map((item,i)=>(
              <div key={i} style={{display:"flex",gap:8,marginBottom:6,alignItems:"flex-start"}}>
                <div style={{width:16,height:16,background:TEAL,borderRadius:99,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>
                  <span style={{color:WHITE,fontSize:9,fontWeight:900}}>✓</span>
                </div>
                <p style={{color:"#1A5276",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
              </div>
            ))}
          </Card>
          <Card style={{borderLeft:`4px solid ${AMBER}`,background:"#FFFBEB"}}>
            <p style={{color:"#92400E",fontWeight:700,fontSize:13,margin:"0 0 6px"}}>The MA-to-GA pathway</p>
            <p style={{color:"#92400E",fontSize:13,lineHeight:1.65,margin:0}}>Completing a Modern Apprenticeship does not close the GA door — it can open it. Many GA programmes accept HNC or HND holders at advanced entry into year 2, significantly shortening the overall duration. An MA in engineering or IT followed by a GA is a well-established and highly respected route to degree-level qualification and chartered status.</p>
          </Card>
        </div>
      )}
    </div>
  );
}

// ─── FRAMEWORKS ───────────────────────────────────────────────────────────────
const FRAMEWORKS=[
  {sector:"Digital and Technology",icon:"💻",frameworks:[
    {name:"IT: Software Development",level:"SCQF 10 (BEng/BSc Hons)",duration:"4 years",universities:"University of Glasgow, Heriot-Watt, Edinburgh Napier, Dundee, UWS",employers:"JP Morgan Chase, ScottishPower, Leonardo, various tech SMEs",salary:"£20,000–£26,000 starting / £40,000–£60,000+ post-completion",accreditation:"BCS (British Computer Society)",notes:"Most popular digital GA. Strong private sector demand. Agile, software engineering, systems design."},
    {name:"Cyber Security",level:"SCQF 10 (BSc Hons) or SCQF 11 (MSc)",duration:"4–5 years",universities:"University of Strathclyde (MSc), others for BSc",employers:"Scottish Government, NHS Scotland, financial institutions, defence",salary:"£22,000–£28,000 starting / £45,000–£70,000+ post-completion",accreditation:"Pathway to CISSP, CISM, BCS membership",notes:"Highest demand, significant skills gap. MSc route at Strathclyde is particularly well-regarded."},
    {name:"Data Science",level:"SCQF 10 (BSc Hons)",duration:"4 years",universities:"Robert Gordon University, University of Dundee",employers:"NHS NSS, Scottish Government, energy sector, retail, financial services",salary:"£22,000–£28,000 starting / £45,000–£65,000+ post-completion",accreditation:"Pathway to BCS, Royal Statistical Society",notes:"Most versatile framework — data skills needed in every sector."},
    {name:"IT: Management for Business",level:"SCQF 10 (BSc Hons)",duration:"4 years",universities:"University of Strathclyde, University of Glasgow",employers:"Public sector, financial services, large organisations",salary:"£20,000–£25,000 starting / £38,000–£55,000+ post-completion",accreditation:"BCS pathway",notes:"Bridges technology and business management. Good for those who want to lead digital transformation rather than solely code."},
  ]},
  {sector:"Engineering",icon:"⚙️",frameworks:[
    {name:"Engineering: Design and Manufacture",level:"SCQF 10 (BEng Hons)",duration:"4 years",universities:"Heriot-Watt University, University of Strathclyde",employers:"Leonardo, Babcock, BAE Systems, Weir Group, SGN, ScottishPower",salary:"£18,000–£24,000 starting / £37,000–£50,000+ post-completion",accreditation:"IMechE accredited — pathway to IEng and CEng",notes:"Most established engineering GA. Real projects from day one."},
    {name:"Civil Engineering",level:"SCQF 10 (BEng Hons)",duration:"4 years",universities:"University of Strathclyde, Heriot-Watt",employers:"Balfour Beatty, BAM, Arcadis, Transport Scotland",salary:"£18,000–£22,000 starting / £35,000–£55,000+ post-completion",accreditation:"ICE accredited — pathway to IEng and CEng",notes:"Strong infrastructure pipeline in Scotland drives sustained demand."},
    {name:"Engineering: Instrumentation, Measurement and Control",level:"SCQF 10 (BEng Hons)",duration:"4 years",universities:"Robert Gordon University",employers:"Oil and gas, energy, manufacturing sectors",salary:"£20,000–£26,000 starting / £38,000–£55,000+ post-completion",accreditation:"IET pathway",notes:"Specialist framework serving North Sea energy sector and precision manufacturing."},
  ]},
  {sector:"Construction and Built Environment",icon:"🏗️",frameworks:[
    {name:"Construction and the Built Environment",level:"SCQF 10 (BSc Hons)",duration:"4 years",universities:"Edinburgh Napier University, Glasgow Caledonian University, Robert Gordon University",employers:"Balfour Beatty, BAM, Arcadis, Scottish councils, NHS Estates",salary:"£18,000–£22,000 starting / £35,000–£55,000+ post-completion",accreditation:"RICS and CIOB accredited — pathway to MRICS and MCIOB",notes:"RICS accreditation makes this one of the most internationally portable qualifications in the GA portfolio."},
  ]},
  {sector:"Business, Finance and Management",icon:"💼",frameworks:[
    {name:"Business Management",level:"SCQF 10 (BA Hons)",duration:"4 years",universities:"Robert Gordon University, University of Dundee, University of the West of Scotland, Heriot-Watt",employers:"Scottish councils, NHS, financial services, energy, retail",salary:"£18,000–£24,000 starting / £30,000–£45,000+ post-completion",accreditation:"CMI pathway",notes:"Most widely available GA. Specialisms in Financial Services, Business Analysis and Project Management."},
    {name:"Accounting with Professional Accreditation",level:"SCQF 10 (BA Hons) or SCQF 11 (MAcc)",duration:"4–5 years",universities:"Edinburgh Napier University (MAcc), Glasgow Caledonian University",employers:"Accountancy firms, financial services, public sector finance teams",salary:"£20,000–£26,000 starting / £40,000–£60,000+ post-completion",accreditation:"ACCA aligned — significant exemptions from professional exams on completion",notes:"One of the strongest professional accreditation stories in the GA portfolio. Near-equivalent to qualifying as ACCA."},
  ]},
  {sector:"Early Learning and Childcare",icon:"🌟",frameworks:[
    {name:"Early Learning and Childcare",level:"SCQF 9 (BA Ordinary Degree)",duration:"3 years",universities:"Various Scottish universities and UHI colleges",employers:"Scottish councils, NHS, private and charity nursery providers",salary:"£18,000–£22,000 starting / £25,000–£35,000+ post-completion",accreditation:"SSSC registration — mandatory for practice in Scotland",notes:"Driven by Scottish Government 1140 hours ELC expansion. Strong public sector demand. The only GA currently at SCQF Level 9."},
  ]},
];

function FrameworksModule(){
  const [sector,setSector]=useState("Digital and Technology");
  const [active,setActive]=useState(null);
  const sec=FRAMEWORKS.find(f=>f.sector===sector)||FRAMEWORKS[0];
  return (
    <div>
      <PageHeader icon="📋" title="The 15 Frameworks" subtitle="Every GA pathway available in Scotland — universities, employers, salaries and professional accreditation."/>
      <InfoBox text="Scotland currently offers 15 GA frameworks. The ones listed here cover the most active recruitment areas. All are fully funded by the Scottish Government." type="info"/>
      <div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>
        {FRAMEWORKS.map(f=>(
          <button key={f.sector} onClick={()=>{setSector(f.sector);setActive(null);}} style={{background:sector===f.sector?NAVY:WHITE,color:sector===f.sector?WHITE:MID,border:`1px solid ${sector===f.sector?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:sector===f.sector?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {f.icon} {f.sector.split(" ")[0]}
          </button>
        ))}
      </div>
      <div>
        {sec.frameworks.map((fw,i)=>(
          <div key={i} style={{background:WHITE,border:`1px solid ${active===i?PLUM:"#E2E8F0"}`,borderRadius:12,overflow:"hidden",marginBottom:10,boxShadow:"0 1px 4px rgba(0,0,0,0.04)"}}>
            <button onClick={()=>setActive(active===i?null:i)} style={{width:"100%",background:"none",border:"none",padding:"14px 15px",display:"flex",justifyContent:"space-between",alignItems:"flex-start",cursor:"pointer",fontFamily:"inherit",gap:10}}>
              <div style={{textAlign:"left"}}>
                <p style={{color:NAVY,fontWeight:800,fontSize:14,margin:"0 0 3px"}}>{fw.name}</p>
                <p style={{color:MID,fontSize:12,margin:0}}>{fw.level} · {fw.duration}</p>
              </div>
              <span style={{color:PLUM,fontSize:18,flexShrink:0}}>{active===i?"−":"+"}</span>
            </button>
            {active===i&&(
              <div style={{padding:"0 15px 15px",borderTop:"1px solid #F0F4F8"}}>
                {[["Universities",fw.universities],["Scottish employers",fw.employers],["Salary",fw.salary],["Professional accreditation",fw.accreditation],["Key notes",fw.notes]].map(([label,val],j)=>(
                  <div key={j} style={{display:"flex",gap:12,padding:"8px 0",borderBottom:j<4?"1px solid #F8FAFC":"none"}}>
                    <span style={{color:MID,fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:0.4,minWidth:100,flexShrink:0}}>{label}</span>
                    <span style={{color:"#444",fontSize:13,lineHeight:1.5}}>{val}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <Card style={{background:"#FAF5FF",borderLeft:`3px solid ${PLUM}`}}>
        <p style={{color:PLUM,fontWeight:700,fontSize:13,margin:"0 0 8px"}}>Key universities at a glance</p>
        {[["University of Strathclyde","Cyber Security (MSc), IT: Management for Business, Software Development, Civil Engineering, Engineering: Design and Manufacture, Business Management"],["Heriot-Watt University","Engineering: Design and Manufacture, IT: Software Development, Business Management, Civil Engineering"],["Edinburgh Napier University","Construction and Built Environment, IT: Software Development, Accounting (MAcc)"],["University of Glasgow","Software Engineering, IT: Management for Business"],["Glasgow Caledonian University","Construction and Built Environment, Accounting (MAcc), Cyber Security"],["Robert Gordon University","Construction and Built Environment, Business Management, Data Science, Instrumentation"],["University of Dundee","Business Management, IT: Software Development, Data Science"],["University of the West of Scotland","Business Management, IT: Software Development, Engineering"]].map(([uni,courses],i)=>(
          <div key={i} style={{marginBottom:8,paddingBottom:8,borderBottom:i<7?"1px solid #F0E6FF":"none"}}>
            <p style={{color:PLUM,fontWeight:700,fontSize:12,margin:"0 0 2px"}}>{uni}</p>
            <p style={{color:"#6B21A8",fontSize:12,lineHeight:1.4,margin:0}}>{courses}</p>
          </div>
        ))}
      </Card>
    </div>
  );
}

// ─── AM I READY ───────────────────────────────────────────────────────────────
function ReadyModule(){
  const [scores,setScores]=useState({});
  const questions=[
    {id:"academic",q:"I have or expect 4 SQA Highers at BBBB or above (or an HNC/HND in a relevant subject)",yes:2,no:0,maybe:1},
    {id:"subjects",q:"I have Maths and/or a relevant science Higher for my chosen framework",yes:2,no:0,maybe:1},
    {id:"workload",q:"I can genuinely manage full-time employment AND degree-level study simultaneously",yes:2,no:0,maybe:1},
    {id:"commitment",q:"I am prepared to commit to 4+ years in the same employment contract",yes:2,no:0,maybe:1},
    {id:"academic2",q:"I am comfortable with academic writing, essays, reports and university-level assessments",yes:2,no:0,maybe:1},
    {id:"motivation",q:"I have a genuine interest in the specific sector I am applying to — not just the salary or the degree",yes:2,no:0,maybe:1},
    {id:"resilience",q:"When things get hard — at work or academically — I seek help rather than withdrawing",yes:2,no:0,maybe:1},
    {id:"organisation",q:"I am organised enough to manage deadlines at work and at university simultaneously",yes:2,no:0,maybe:1},
    {id:"employer",q:"I understand that the job comes first — I cannot prioritise university over my employment duties",yes:2,no:0,maybe:1},
    {id:"support",q:"I have support at home — people who understand the demands and will not expect my full attention",yes:2,no:0,maybe:1},
  ];
  const total=Object.values(scores).reduce((a,b)=>a+b,0);
  const answered=Object.keys(scores).length;
  const pct=answered>0?Math.round((total/(answered*2))*100):0;

  function getVerdict(){
    if(answered<10) return null;
    if(total>=17) return {label:"Strong candidate",col:GREEN,text:"Your responses suggest you are well-suited to the demands of a Graduate Apprenticeship. The key now is finding the right framework and employer and making a compelling application."};
    if(total>=13) return {label:"Possible — with preparation",col:AMBER,text:"You have the foundations but some areas need work before you apply. Focus on the areas where you answered 'Maybe' and address them before submitting applications."};
    return {label:"Consider an MA first",col:RUST,text:"A Modern Apprenticeship may be the better route right now — it could lead to a GA later with HNC/HND advanced entry. Do not rule out the GA permanently, but be honest about readiness."};
  }
  const verdict=getVerdict();

  return (
    <div>
      <PageHeader icon="✅" title="Am I Ready for a GA?" subtitle="An honest self-assessment — most candidates skip this and most regret it. Take 5 minutes to be honest with yourself."/>
      <InfoBox text="This is not a test. It is a prompt for honest reflection. There are no right answers — only useful ones." type="info"/>
      {questions.map((q,i)=>(
        <Card key={q.id} style={{padding:14}}>
          <p style={{color:NAVY,fontWeight:700,fontSize:13,margin:"0 0 10px",lineHeight:1.4}}>{i+1}. {q.q}</p>
          <div style={{display:"flex",gap:8}}>
            {[{label:"Yes",val:2,col:GREEN},{label:"Maybe",val:1,col:AMBER},{label:"No",val:0,col:RUST}].map(opt=>(
              <button key={opt.label} onClick={()=>setScores(s=>({...s,[q.id]:opt.val}))} style={{flex:1,padding:"8px 4px",background:scores[q.id]===opt.val?opt.col:WHITE,border:`2px solid ${opt.col}`,color:scores[q.id]===opt.val?WHITE:opt.col,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
                {opt.label}
              </button>
            ))}
          </div>
        </Card>
      ))}
      {answered>0&&(
        <Card style={{borderLeft:`4px solid ${pct>=85?GREEN:pct>=65?AMBER:RUST}`,background:pct>=85?"#F0FDF4":pct>=65?"#FFFBEB":"#FEF2F2"}}>
          <p style={{color:MID,fontSize:11,textTransform:"uppercase",fontWeight:700,margin:"0 0 6px"}}>{answered}/10 answered</p>
          <div style={{background:"#E2E8F0",borderRadius:99,height:8,marginBottom:10}}>
            <div style={{background:pct>=85?GREEN:pct>=65?AMBER:RUST,height:8,borderRadius:99,width:`${pct}%`,transition:"width 0.3s"}}/>
          </div>
          {verdict&&(
            <div>
              <p style={{color:verdict.col,fontWeight:800,fontSize:15,margin:"0 0 6px"}}>{verdict.label}</p>
              <p style={{color:"#444",fontSize:13,lineHeight:1.65,margin:0}}>{verdict.text}</p>
            </div>
          )}
        </Card>
      )}
      <Accordion accent={PLUM} items={[
        {title:"The warning signs — when a GA might not be right yet",content:"Be honest with yourself about these:\n\n• You are choosing a GA primarily because you think it sounds impressive, not because you genuinely want to do degree-level academic work alongside a full-time job\n• You have not researched the specific framework you are applying to — you cannot explain what you would actually be studying\n• You are applying because a parent or teacher suggested it, not because it fits your goals\n• You do not have the required Highers and are hoping the employer will overlook this\n• You have significant personal commitments (caring responsibilities, health issues, financial pressures) that would make the dual demands very difficult\n• You have struggled to manage multiple priorities in the past and have not yet developed the organisational systems to handle it\n\nNone of these is permanent. But being honest about them now is far better than withdrawing from a programme 18 months in."},
        {title:"The green flags — signs you are well-suited",content:"These suggest a GA is likely the right route:\n\n• You consistently performed well academically even when under pressure — school reports, exam results, coursework all show sustained effort\n• You have held a job, volunteered, or managed significant responsibilities alongside school — you know what managing multiple commitments feels like\n• You are genuinely curious about the sector you are applying to — you have read about it, followed it, done things in your own time related to it\n• You are organised — you use a calendar, you meet deadlines, you plan ahead\n• You communicate well when you need support — you ask for help rather than letting problems escalate\n• You have a clear sense of what you want from a career and you can articulate why a GA is the right path to it"},
        {title:"If you are not ready — what next?",content:"Not being ready for a GA right now is not failure. It is information.\n\nOptions:\n\n1. Modern Apprenticeship first — complete an MA in your chosen sector, earn an HNC or HND as part of it, then apply for GA advanced entry. This is a well-established and respected route.\n\n2. College first — complete an HNC or HND at college full-time, then apply for GA year 2 entry. Shorter overall route and stronger academic preparation.\n\n3. Foundation Apprenticeship — if still at school (S5 or S6), a Foundation Apprenticeship provides real industry experience and a Level 6 qualification, plus some universities treat it as equivalent to a Higher.\n\n4. Build your Highers — if academic qualifications are the gap, S6 is the opportunity to improve or add subjects. Some universities also accept entry from college-level study.\n\nThe GA will still be there in 1–2 years. Going in better prepared produces better outcomes than going in too early."},
      ]}/>
    </div>
  );
}

// ─── APPLY ────────────────────────────────────────────────────────────────────
function ApplyModule(){
  const [step,setStep]=useState(0);
  const steps=[
    {title:"Research and identify target employers",icon:"🔍",content:"The first step is identifying which framework and which employers you want to target.\n\n1. Visit apprenticeships.scot — filter by 'Graduate Apprenticeship' and your chosen sector\n2. Set up email alerts so you are notified immediately when relevant vacancies open\n3. Check employer websites directly — many employers (JP Morgan, ScottishPower, NHS boards, Scottish Government) advertise GA vacancies on their own careers pages as well as apprenticeships.scot\n4. Check MyJobScotland for public sector GA roles — councils, NHS and Scottish Government all use this portal\n5. Check university GA pages — universities often list current employer partners and may have links to vacancies\n\nNote which employers interest you most and research them thoroughly before applying. A generic application to every employer will perform far worse than a tailored application to five.",tip:"Many major employers announce their GA intake schedule 6–9 months in advance on LinkedIn. Following ScottishPower, NHS Scotland, Scottish Government and Leonardo on LinkedIn will give you early notice of upcoming vacancies."},
    {title:"Understand the recruitment calendar",icon:"📅",content:"GA recruitment follows a broadly predictable calendar, though individual employers vary:\n\nJanuary–March: Peak recruitment window for most September starts. Major employers including Scottish Government, NHS boards, councils and large private sector organisations typically open applications in this window. This is when you need to be ready.\n\nApril–June: Late applications and additional intake rounds. Some employers open additional cohorts if their first intake was undersubscribed or oversubscribed. Graduate Apprenticeships for recent college or university completers sometimes recruit in this window.\n\nSeptember–November: Some employers recruit for January starts, particularly in financial services and IT.\n\nYear-round: Some private sector tech employers and smaller organisations recruit as roles arise, with no fixed intake calendar.\n\nThe message: do your research and prepare your application materials by December/January. Missing the February window in a competitive sector can mean waiting a full year.",tip:"Put application deadlines in your calendar the moment you find them. Set a reminder two weeks before each deadline. Many candidates miss deadlines because they assumed they had more time."},
    {title:"The application form",icon:"📝",content:"Most GA applications involve:\n\n1. An online application form — personal details, education, employment history\n2. A personal statement or covering letter — your most important written piece\n3. Competency questions — 'Tell us about a time you...' written answers (typically 250–500 words each)\n4. Sometimes: an online test — numerical reasoning, verbal reasoning, situational judgement\n\nFor the personal statement and competency questions:\n• Read the job description and person specification carefully. Highlight every skill and quality mentioned.\n• Address every criterion directly. If they list 'problem-solving', your application must contain a specific example of problem-solving.\n• Use the STAR method for competency questions: Situation, Task, Action, Result\n• Tailor every application. A generic application is immediately identifiable and almost always unsuccessful.\n• Word count: stay within the limit. Going over suggests you cannot prioritise. Going significantly under suggests you have not tried.\n\nFor online tests:\n• Practice in advance — free resources on SHL Direct, Jobtestprep and AssessmentDay\n• Numerical reasoning tests are common for Engineering, Finance and Data frameworks\n• Complete tests in a quiet environment with no distractions",tip:"Before submitting any application, read it aloud. If it sounds like it was written by a template rather than by a person who genuinely wants this specific role, rewrite it."},
    {title:"The interview process",icon:"🎤",content:"If shortlisted, the interview process typically involves:\n\nStage 1 — Telephone or video screening: 15–30 minutes with HR. Assesses basic communication, motivation and eligibility. Questions: 'Why this apprenticeship?', 'Why this employer?', 'Tell me about yourself'.\n\nStage 2 — First interview: 45–60 minutes, usually panel. Competency-based questions. May include technical questions for engineering and IT frameworks.\n\nStage 3 (major employers) — Assessment centre: half or full day. Group exercises, presentations, written tasks, and additional interviews. Assesses team behaviour, communication and professional conduct under observation.\n\nFor smaller employers, stages 1 and 2 may be combined into a single interview.\n\nPreparation:\n• Research the employer thoroughly — company values, recent projects, financial performance\n• Read the Care Inspectorate equivalent for your sector (for engineering: the employer's major projects; for finance: recent annual report)\n• Prepare 6–8 STAR examples covering the competencies listed in the job description\n• Prepare 3 thoughtful questions to ask the interviewer — see the Interview section of this module\n• Know your CV inside out — be ready to discuss anything on it in detail",tip:"For assessment centres specifically: the observer is watching you during lunch, breaks and group conversations as well as during formal exercises. Professional conduct applies throughout the day."},
    {title:"After the offer — starting your GA",icon:"🚀",content:"Once you have an offer:\n\n1. Confirm acceptance in writing promptly — offers can be time-limited\n2. Apply to SAAS for your tuition fee funding — do this as soon as you have confirmation of your university place\n3. Confirm your start date with your employer and your university induction date\n4. Read your employment contract carefully before signing — check: salary, holiday entitlement, study time provisions, notice period\n5. Connect with your workplace mentor before you start if possible — a brief introductory conversation sets the relationship up well\n\nIn your first weeks:\n• Be on time, every day, without exception — reliability is the single most visible quality in your early weeks\n• Ask questions — curiosity is valued; pretending you know things you don't is not\n• Set up your study schedule immediately, before university deadlines start arriving\n• Introduce yourself to your personal academic tutor at university — do not wait for them to come to you\n• Share your university deadline calendar with your line manager at work so there are no surprises",tip:"The tripartite agreement (you, employer, university) must be signed before your programme begins. Make sure you understand what it commits all three parties to — particularly the employer's obligation to provide study time."},
  ];
  const s=steps[step];
  return (
    <div>
      <PageHeader icon="📝" title="How to Apply" subtitle="Step-by-step from vacancy search to starting your GA — including the full recruitment timeline."/>
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        {steps.map((st,i)=>(
          <button key={i} onClick={()=>setStep(i)} style={{background:step===i?NAVY:WHITE,color:step===i?WHITE:MID,border:`1px solid ${step===i?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:step===i?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase",whiteSpace:"nowrap"}}>
            {st.icon} Step {i+1}
          </button>
        ))}
      </div>
      <Card>
        <p style={{color:PLUM,fontWeight:800,fontSize:15,margin:"0 0 4px"}}>{s.icon} {s.title}</p>
        <div style={{height:2,width:28,background:AMBER,borderRadius:2,marginBottom:12}}/>
        <p style={{color:"#444",fontSize:14,lineHeight:1.75,margin:"0 0 14px",whiteSpace:"pre-line"}}>{s.content}</p>
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

// ─── MYJOBSCOTLAND ────────────────────────────────────────────────────────────
function MJSModule(){
  const [section,setSection]=useState("overview");
  const sections={
    overview:{label:"Overview",content:"MyJobScotland is the primary recruitment portal for all 32 Scottish councils, the Scottish Government, NHS Scotland, Police Scotland and many other public sector employers. For Graduate Apprenticeships specifically, it is essential because:\n\n• Scottish Government Digital posts all GA vacancies here — Software Development, Cyber Security, Data Science, IT Management\n• All 32 Scottish councils recruit business management, accounting and construction GAs through MyJobScotland\n• NHS boards post engineering, IT and business GA vacancies here\n• Registers of Scotland, Revenue Scotland and other NDPB employers advertise here\n\nKey public sector GA employers on MyJobScotland:\n• Scottish Government — the largest single recruiter for digital and business GAs in Scotland\n• City of Edinburgh Council — significant digital, construction and business GA programme\n• Glasgow City Council — business management and digital GAs\n• NHS National Services Scotland — IT and data science GAs\n• Scottish Police Authority — ICT and business GAs\n\nCreate your full profile at myjobscotland.gov.uk before you apply. An incomplete profile is screened automatically before a human reads your application.",tip:"Set job alerts on MyJobScotland for 'Graduate Apprenticeship', 'Graduate Apprentice', and your specific framework name. Set notification to immediate — not weekly. Public sector GA roles can close early if oversubscribed."},
    statement:{label:"Supporting Statement",content:"For public sector GA applications, the supporting statement is the most important element of your application. It is scored against the person specification — every Essential criterion is a potential scored item.\n\nGA supporting statements are assessed at a higher standard than standard MA applications. You are being evaluated for degree-level potential, not just job-readiness.\n\nHow to write it:\n1. Print the person specification and highlight every Essential criterion\n2. For each criterion, write one focused paragraph of evidence using STAR\n3. Use the exact language from the person specification — ATS systems and human scorers both look for keyword alignment\n4. Address them in the order they appear\n5. Length: 600–900 words. Never more than one A4 page when printed.\n\nGA-specific criteria you will frequently see:\n• Ability to balance the demands of employment and university-level study\n• Analytical and problem-solving skills\n• Communication — written and verbal — at a professional standard\n• Self-motivation and initiative\n• Commitment to continuous learning and professional development\n• Technical interest specific to the framework (for digital and engineering roles)\n\nFor each criterion: have a specific, evidenced example. 'Commitment to learning' should reference self-directed study, online courses or extracurricular technical activity. Do not claim it without evidence.",tip:"The GA supporting statement is being assessed differently from an MA statement. You are competing against candidates who may have higher Highers, more extracurricular activity and stronger personal statements. Your examples must be specific, evidenced and at a level of sophistication that signals degree-level potential."},
    questions:{label:"Competency Questions",content:"Many public sector GA applications include additional competency questions as part of the online form. These are scored separately from the supporting statement.\n\nTypical GA competency questions:\n• 'Describe a time you had to learn something complex quickly. How did you approach it?'\n• 'Tell us about a project or task where you had to manage multiple deadlines simultaneously.'\n• 'Give an example of a time you identified a problem and took initiative to solve it.'\n• 'Describe a situation where you worked effectively as part of a team on a challenging task.'\n• 'Why do you want to pursue a Graduate Apprenticeship rather than full-time university study?'\n\nThe last question — why GA not university — is particularly important and particularly poorly answered by most candidates. A weak answer: 'I don't want debt and I want to earn while I learn.' A strong answer demonstrates genuine understanding of how the GA model enhances learning through the integration of theory and practice, and connects specifically to the employer and the framework.\n\nWord limit guidance: most competency questions have a 300–500 word limit. Use the full limit. A 150-word answer to a 500-word question signals insufficient preparation.",tip:"Treat each competency question as a standalone assessment, not as an afterthought to the supporting statement. Score yourself on each one before submitting: does this answer demonstrate the specific competency? Is it evidenced? Is it specific enough to distinguish me from 50 other applicants?"},
  };
  const s=sections[section];
  return (
    <div>
      <PageHeader icon="🏛️" title="MyJobScotland for GAs" subtitle="Public sector Graduate Apprenticeships — how to find them and write an application that scores."/>
      <NavTabBar options={Object.entries(sections).map(([k,v])=>({id:k,label:v.label}))} active={section} onSelect={setSection}/>
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 10px",textTransform:"uppercase"}}>{s.label}</p>
        <p style={{color:"#444",fontSize:13,lineHeight:1.75,margin:"0 0 14px",whiteSpace:"pre-line"}}>{s.content}</p>
        <div style={{background:"#FFFBEB",borderLeft:`3px solid ${AMBER}`,borderRadius:8,padding:"9px 12px"}}>
          <p style={{color:"#92400E",fontSize:13,lineHeight:1.6,margin:0}}>💡 {s.tip}</p>
        </div>
      </Card>
      <p style={{color:NAVY,fontWeight:800,fontSize:12,textTransform:"uppercase",letterSpacing:0.5,margin:"16px 0 10px"}}>Personal statement — weak vs strong</p>
      <ExampleToggle
        weak="I am applying for the Graduate Apprenticeship because I want to earn while I learn and get a degree without debt. I am a hard worker and I am keen to develop my skills in this area. I work well in a team and I am committed to my own development. I think a GA is better than university because you get real experience."
        strong="I am applying for the Software Development Graduate Apprenticeship with the Scottish Government because I want to develop professional-grade technical skills within an organisation whose digital transformation work directly affects millions of people in Scotland. In response to the Essential criterion 'ability to balance the demands of employment and degree-level study', I draw on two years of managing S5 and S6 academic work alongside a 16-hour-per-week part-time job and captaincy of my school's football team. I managed four Higher subjects while working every weekend, developing the scheduling discipline and self-management that a GA demands. I have also developed relevant technical skills independently — I completed the Google IT Support Professional Certificate (Coursera, 2024) and have built three small web projects in HTML, CSS and JavaScript, documented on my GitHub profile. These activities reflect a genuine interest in technology that goes beyond the school curriculum. I am aware that a GA requires a higher level of academic commitment than a Modern Apprenticeship, and I welcome that challenge — my academic record demonstrates that I perform better when the demands are higher, not lower."
        weakLabel="Weak statement"
        strongLabel="Strong statement"
      />
    </div>
  );
}

// ─── CV ───────────────────────────────────────────────────────────────────────
function CVModule(){
  const [view,setView]=useState("profile");
  return (
    <div>
      <PageHeader icon="📄" title="CV and Cover Letter" subtitle="What GA employers actually look for — and the weak vs strong examples that show the difference."/>
      <InfoBox text="GA CVs are assessed at a higher standard than MA CVs. Employers are looking for evidence of degree-level potential — analytical thinking, self-direction, genuine sector interest and academic achievement — not just employability basics." type="tip"/>
      <div style={{display:"flex",gap:6,marginBottom:14,flexWrap:"wrap"}}>
        {[{id:"profile",label:"Personal Profile"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"skills",label:"Skills and Extras"},{id:"cover",label:"Cover Letter"},{id:"checklist",label:"Checklist"}].map(v=>(
          <button key={v.id} onClick={()=>setView(v.id)} style={{background:view===v.id?NAVY:WHITE,color:view===v.id?WHITE:MID,border:`1px solid ${view===v.id?NAVY:"#E2E8F0"}`,borderRadius:20,padding:"6px 12px",fontSize:11,fontWeight:view===v.id?800:400,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>
            {v.label.split(" ")[0]}
          </button>
        ))}
      </div>
      {view==="profile"&&(
        <div>
          <Card>
            <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 8px",textTransform:"uppercase"}}>What a strong GA personal profile does</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:"0 0 10px"}}>It answers four questions in 100–150 words: Who are you? What is your strongest relevant quality? Why this specific framework? Why this specific employer or type of employer?</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:0}}>It never uses: hardworking, team player, passionate, enthusiastic — unless immediately evidenced with a specific example. These words are meaningless without evidence.</p>
          </Card>
          <ExampleToggle
            weak="I am a motivated and hard-working school leaver who is passionate about technology and keen to start a career in software development. I am a good team player and I am always willing to learn new things. I believe a Graduate Apprenticeship is the ideal opportunity for me to develop my skills while earning a salary."
            strong="Academically strong S6 student with a genuine interest in software development, developed through self-directed learning and two years of extracurricular coding club. Achieved A grades in National 5 Computing and Mathematics and am on track for Higher Computing (predicted A) and Higher Maths (predicted B). Completed the freeCodeCamp JavaScript Algorithms certificate independently and have built four small web projects available on GitHub. Seeking a Software Development Graduate Apprenticeship with the Scottish Government specifically because of its digital transformation programme — I want to develop professional-grade skills while contributing to public services that affect people directly. I am comfortable with the demands of combining full-time employment with degree-level study, having managed school, part-time work and sport simultaneously for two years."
            weakLabel="Weak profile"
            strongLabel="Strong profile"
          />
        </div>
      )}
      {view==="education"&&(
        <div>
          <Card>
            <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 8px",textTransform:"uppercase"}}>How to present education on a GA CV</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:"0 0 10px"}}>List qualifications in reverse chronological order. Include all National 5s and Highers with grades. If grades are predicted, say so clearly. Highlight relevant subjects — if applying for Engineering, your Maths and Physics grades should be prominent, not buried.</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:"0 0 10px"}}>Include any short courses, online certifications, or extracurricular learning — even in progress. For GA applications particularly, self-directed learning is a strong signal. 'Google IT Support Professional Certificate (in progress, 60% complete)' is better than nothing and demonstrates initiative.</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:0}}>If you have a Foundation Apprenticeship: list it prominently, as universities must consider it as part of entry requirements and many treat it as equivalent to a Higher in the relevant subject.</p>
          </Card>
          <ExampleToggle
            weak="School: Riverside Academy\nQualifications: Various Highers and National 5s\nCurrently in S6 studying for more Highers"
            strong="Riverside Academy, Glasgow — S4–S6 (2021–2025)\n\nHighers (S5–S6):\n• Computing Science — A (achieved)\n• Mathematics — B (achieved)\n• English — B (achieved)\n• Physics — predicted A\n\nNational 5s (S4):\n• Mathematics — A\n• English — A\n• Computing Science — A\n• Physics — B\n• Biology — B\n\nAdditional qualifications:\n• Google IT Support Professional Certificate (Coursera) — 4 of 5 modules complete\n• freeCodeCamp: Responsive Web Design — Certificate of Completion (Feb 2024)\n• freeCodeCamp: JavaScript Algorithms and Data Structures — Certificate of Completion (Aug 2024)"
            weakLabel="Weak education"
            strongLabel="Strong education"
          />
        </div>
      )}
      {view==="experience"&&(
        <div>
          <Card>
            <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 8px",textTransform:"uppercase"}}>Presenting experience on a GA CV</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:"0 0 10px"}}>Include all paid, voluntary and informal experience. For GA applications, frame everything through the lens of the qualities GA employers want: self-direction, analytical thinking, reliability, communication, and genuine sector interest.</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:0}}>Use CAR: Context — Action — Result. Start every bullet with a strong action verb. Quantify wherever possible. 'I' not 'we'.</p>
          </Card>
          <ExampleToggle
            weak="Retail Assistant, Tesco (2023–present)\nI worked at the checkout and helped customers. I was reliable and never missed a shift.\n\nSchool Computer Club (2022–2024)\nI attended and learned about coding."
            strong="Retail Assistant, Tesco Express — Glasgow (Sept 2023–present)\n• Served 80+ customers per shift in a fast-paced environment; resolved queries and complaints independently, escalating only where policy required\n• Identified a recurring stock accuracy issue in the chilled section and reported it with supporting data; the discrepancy was resolved within 48 hours and I was commended by the store manager\n• Maintained 100% attendance across 14 months of employment, including covering additional shifts at short notice on four occasions\n• Trained two new colleagues in checkout and customer service procedures\n\nCoding Club Lead, Riverside Academy (Sept 2022–June 2024)\n• Co-led weekly sessions for 18 students, introducing HTML, CSS and Python fundamentals\n• Designed three structured project challenges used across all three years of the club\n• Proposed the club's first public website (built in HTML/CSS) — adopted permanently by the school as the club's online presence"
            weakLabel="Weak experience"
            strongLabel="Strong experience"
          />
        </div>
      )}
      {view==="skills"&&(
        <div>
          <Card>
            <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 8px",textTransform:"uppercase"}}>Skills and extracurricular activities</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:"0 0 10px"}}>GA employers place significant weight on extracurricular activities — they signal that you are proactive, manage multiple commitments and have interests beyond the minimum.\n\nMost valuable for GA applications:\n• Duke of Edinburgh Award (Silver or Gold) — sustained commitment, resilience\n• Leadership roles: team captain, Head Pupil, school council, club president\n• STEM competitions and challenges: Young Engineers Scotland, Arkwright Scholarship, British Physics Olympiad\n• Self-directed technical learning: online courses, personal projects, GitHub portfolio\n• DYW activities: workplace visits, employer projects, career fairs\n• Volunteering: especially anything with sustained commitment over 6+ months</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:0}}>Frame every item with evidence: not 'Gold DofE Award' but 'Gold Duke of Edinburgh's Award — 12 months of volunteering at Westfield Foodbank, a four-day Cairngorms expedition, and a residential project supporting young children with additional needs.'</p>
          </Card>
        </div>
      )}
      {view==="cover"&&(
        <div>
          <Card>
            <p style={{color:TEAL,fontWeight:700,fontSize:13,margin:"0 0 8px",textTransform:"uppercase"}}>The GA cover letter — structure and standards</p>
            <p style={{color:"#444",fontSize:13,lineHeight:1.7,margin:0}}>Structure:\n\nParagraph 1: Which apprenticeship you are applying for, where you found it, and one compelling sentence about why this employer and this framework specifically.\n\nParagraph 2: Demonstrate knowledge of the employer — their work, values, recent projects. Show you have researched them. Name something specific. Connect your own skills and experiences to what they need.\n\nParagraph 3: Address the GA model directly. Why do you want to earn while you learn? What specifically about the integration of work and study appeals to you? What does the degree qualification mean for your long-term career? This paragraph is where most candidates are weakest — generic answers about 'avoiding debt' are unconvincing.\n\nParagraph 4: Reiterate enthusiasm, confirm availability for interview, thank the reader.\n\nLength: 350–500 words. No more.</p>
          </Card>
          <ExampleToggle
            weak="I am writing to apply for the Graduate Apprenticeship at your company. I am interested in this opportunity because I want to earn a salary while getting a degree. I think this is better than going to university full-time. I am a hard worker and I am confident I would be a good fit for your team. I look forward to hearing from you."
            strong="I am writing to apply for the Software Development Graduate Apprenticeship with the Scottish Government Digital Directorate, advertised on apprenticeships.scot. I am specifically drawn to this employer because the Scottish Government's digital transformation programme — including the development of myaccount and the scaling of digital public services — represents exactly the kind of socially impactful technology work I want to build my career on.\n\nI have developed a strong foundation in software development through self-directed study (freeCodeCamp JavaScript Certificate, 2024; four personal projects on GitHub) alongside achieving A grades in National 5 Mathematics and Computing Science, with Higher Computing and Maths currently in progress. At Tesco, where I have worked for 14 months, I developed the reliability and professional communication skills that the workplace component of a GA demands.\n\nI am choosing the GA route over full-time university because I am convinced that the integration of academic learning and professional practice produces a more effective developer than either alone. I want to apply what I learn on Monday in the lecture to what I am building on Tuesday in the office. The Scottish Government's investment in its apprentices — including structured mentorship and dedicated study time — makes it the employer I most want to start this journey with.\n\nI would welcome the opportunity to discuss my application further and am available for interview at any time. Thank you for your consideration."
            weakLabel="Weak cover letter"
            strongLabel="Strong cover letter"
          />
        </div>
      )}
      {view==="checklist"&&(
        <Card>
          <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 12px",textTransform:"uppercase"}}>GA CV and application checklist</p>
          {["Personal profile names the specific framework and employer — not generic","Profile evidences at least one claim — not just assertions","Highers listed with all grades — relevant subjects highlighted","Self-directed learning and online courses included, even in progress","All experience bullets start with action verbs","At least one bullet quantifies an outcome","Extracurricular activities framed with evidence, not just listed","Cover letter names the employer and references something specific about them","Cover letter addresses why GA not traditional university — specifically, not generically","Supporting statement addresses every Essential criterion in the person specification","No spelling or grammar errors — read it aloud","File saved as PDF: Firstname_Lastname_GAApplication.pdf","CV is 1–2 pages maximum","Application is genuinely tailored to this specific role — not copy-pasted"].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,marginBottom:7,alignItems:"flex-start"}}>
              <div style={{width:18,height:18,border:`2px solid ${PLUM}`,borderRadius:4,flexShrink:0,marginTop:1}}/>
              <p style={{color:"#444",fontSize:13,lineHeight:1.5,margin:0}}>{item}</p>
            </div>
          ))}
        </Card>
      )}
    </div>
  );
}

// ─── STAR ─────────────────────────────────────────────────────────────────────
const STAR_EXAMPLES=[
  {label:"Managing complexity",question:"Describe a situation where you had to manage multiple priorities simultaneously. What did you do and what was the outcome?",
   weak:"I had lots of things on at once during my exams. I made a list and tried to get everything done. It was stressful but I managed.",
   good:"During my S5 exams I was also working at the weekends and had football training twice a week. I created a revision timetable and tried to balance everything. I passed all my exams.",
   strong:"During my S5 year I faced a significant convergence of demands: five Higher assessments in a six-week window, 16 hours of weekend work per week at Tesco, and captaincy responsibilities for our school football team including coordinating fixtures with four other schools. I recognised three weeks before the assessment window that I was at risk of being underprepared in two subjects. I spoke with my teachers to understand which topics carried the most marks, restructured my revision to prioritise those areas, negotiated with my manager to reduce my hours for two specific weekends, and delegated the fixture coordination to my vice-captain with clear written instructions. All five assessments were completed, I achieved A grades in three of them and a B in the remaining two, and the football season continued without disruption. I learned that managing multiple priorities requires early identification of conflicts rather than last-minute firefighting — a lesson I apply directly in how I plan my work now.",
   why:"The strong answer demonstrates exactly the quality GA employers are assessing: the ability to manage the demands of full-time employment and degree-level study simultaneously. It shows structured thinking, proactive communication, delegation and outcome delivery — all at a level of sophistication that signals degree-level potential."},
  {label:"Self-directed learning",question:"Tell me about a time you identified a gap in your knowledge and took steps to address it independently.",
   weak:"I wanted to learn about coding so I watched some YouTube videos. I learned a lot from them and I now know the basics of HTML.",
   good:"I decided I wanted to learn Python before applying for the data science GA. I found a free course online and worked through it over two months. I built a simple script that automated a task I was doing manually.",
   strong:"When I decided to apply for the Data Science Graduate Apprenticeship, I audited my own knowledge against what the programme requires and identified SQL as a critical gap — it is foundational to data analysis but was not covered in my school Computing curriculum. I found the freeCodeCamp SQL curriculum, set myself a four-week structured plan, and spent one hour each evening working through it systematically. I then built a project using a public dataset from the Scottish Government's statistics portal — Scottish house price data from 2020–2024 — writing SQL queries to answer specific questions about regional price variation, then visualising the results in a Google Data Studio dashboard. The project is on my GitHub. By the end I could write multi-table JOIN queries, aggregate functions and window functions. When I met a Data Science professional at a school careers event, I was able to discuss SQL confidently — she commented that most school applicants could not do that. The experience reinforced that self-directed learning with a concrete goal produces far better results than passive watching.",
   why:"This answer signals precisely the qualities a GA requires: intellectual honesty about knowledge gaps, structured self-direction, concrete output, and the ability to connect learning to professional context. Using Scottish public data shows awareness of the sector and context the candidate wants to work in."},
  {label:"Handling feedback",question:"Describe a time you received feedback that was difficult to hear. How did you respond?",
   weak:"My teacher told me my essay was not very good. I was upset but I rewrote it and got a better grade.",
   good:"My line manager at Tesco told me I was spending too long on each customer interaction and slowing down the queue. I was a bit surprised because I thought I was being helpful, but I took on board what she said and got faster without losing the quality of service.",
   strong:"In my S5 year I submitted what I believed was a strong piece of work for my Higher English folio — I had worked on it for two weeks and was genuinely proud of it. My teacher returned it with a mark of 12 out of 25 and feedback that my argument was underdeveloped and my evidence poorly integrated. My initial reaction was frustration — I felt the mark did not reflect the effort I had put in. I took 24 hours before responding so I was not reacting from emotion. I then requested a meeting with my teacher, not to dispute the mark, but to understand specifically what 'underdeveloped argument' meant and how to address it. She spent 30 minutes explaining the structure of a Higher-level analytical argument, which was genuinely different from what I had understood. I rewrote the piece using her framework. The revised mark was 21 out of 25. More importantly, I applied the same analytical structure to my next three pieces and averaged 20 throughout the year. I learned that feedback is most useful when you seek to understand it rather than defend against it — and that the gap between effort and quality is closed by understanding, not by trying harder.",
   why:"GA interviews specifically assess response to feedback because the programme requires candidates to receive academic feedback from a university and professional feedback from an employer simultaneously, and to act on both constructively. This answer demonstrates emotional regulation, growth mindset and the ability to translate feedback into improved performance — all at a degree-level standard of self-awareness."},
  {label:"Technical problem-solving",question:"Tell me about a time you solved a technical or analytical problem. Walk me through your approach.",
   weak:"I fixed a computer issue at home by searching online. I found a solution and it worked.",
   good:"Our school's computer club website kept going down. I investigated and found that the hosting was free but had a traffic limit we kept exceeding. I set up a new free hosting account and moved the site there with a higher limit.",
   strong:"During my involvement with the school coding club, the website I had built was intermittently displaying broken images — affecting roughly 30% of page loads according to the browser console errors. Rather than simply reuploading the images, I approached it systematically. I checked the browser console errors and identified that the broken images were specifically those using relative file paths — the others using absolute paths were fine. I researched the difference between relative and absolute paths in HTML and confirmed my hypothesis: the relative paths were resolving differently depending on which directory the server was serving from. I updated all image references to absolute paths, tested across three browsers and on mobile, and confirmed the issue was resolved. I then documented the fix in a README file on the project's GitHub repository so any future contributor would understand the convention. The site has had zero broken image reports in the subsequent four months. I also used this as the basis for a short session at coding club on file path conventions — turning a bug into a teaching moment for 18 other students.",
   why:"This answer demonstrates systematic diagnostic thinking, technical knowledge (relative vs absolute paths), professional habits (documentation, testing across platforms) and the ability to convert individual learning into shared value. For engineering and IT frameworks, this level of technical sophistication in an interview answer is genuinely differentiating."},
];

function STARModule(){
  const [active,setActive]=useState(0);
  const [tier,setTier]=useState("strong");
  const ex=STAR_EXAMPLES[active];
  const tierCol={weak:RUST,good:AMBER,strong:GREEN};
  const tierBg={weak:"#FEF2F2",good:"#FFFBEB",strong:"#F0FDF4"};
  return (
    <div>
      <PageHeader icon="⭐" title="STAR Examples" subtitle="Four GA-level worked examples — more sophisticated than standard MA prep because GA interviews assess degree-level potential."/>
      <InfoBox text="GA interviews assess at a higher level than MA interviews. Weak answers that might pass an MA interview will not pass a GA one. Every answer needs specificity, reflection and evidence of analytical thinking." type="warning"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
        {[{l:"S",w:"Situation",d:"Brief context — 20% of your answer."},{l:"T",w:"Task",d:"Your specific role — 10%."},{l:"A",w:"Action",d:"What YOU did specifically — 50%. Use 'I'."},{l:"R",w:"Result",d:"Outcome + learning — 20%. Quantify."}].map((item,i)=>(
          <div key={i} style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:12}}>
            <div style={{width:30,height:30,borderRadius:6,background:PLUM,color:WHITE,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:16,marginBottom:6}}>{item.l}</div>
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
        <p style={{color:"#333",fontSize:14,lineHeight:1.75,margin:0,fontStyle:"italic"}}>"{ex[tier]}"</p>
      </div>
      <div style={{background:"#FAF5FF",borderLeft:`3px solid ${PLUM}`,borderRadius:8,padding:12,marginBottom:16}}>
        <p style={{color:PLUM,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 4px"}}>Coach commentary</p>
        <p style={{color:"#581C87",fontSize:13,lineHeight:1.65,margin:0}}>{ex.why}</p>
      </div>
    </div>
  );
}

// ─── INTERVIEW ────────────────────────────────────────────────────────────────
const INTERVIEW_QS=[
  {q:"Why do you want to do a Graduate Apprenticeship rather than go to university full-time?",tip:"This is the most important question in every GA interview. 'No debt' is not a strong answer. Connect the GA model specifically to how you learn and what you want to build.",weak:"I don't want to get into debt and I want to earn money while I study. I think it's a better option than going to university.",strong:"I am choosing the GA route because I am convinced that learning is most effective when theory and practice are integrated rather than sequential. At university, you study for three years and then apply what you have learned. In a GA, you apply what you learned on Monday to what you are building on Tuesday — and what you encounter on Tuesday informs how you approach Wednesday's lecture. That cycle of immediate application and feedback produces deeper understanding than delayed application ever can. I also want to develop a professional identity alongside my academic one — not as an afterthought after graduation, but simultaneously. The career trajectory that a GA produces, with degree-level qualification and years of professional experience at completion, is more aligned with what I want to be at 25 than the alternative."},
  {q:"Why this employer specifically?",tip:"Generic answers ('great reputation', 'exciting company') fail. Name something specific. Show you have researched them.",weak:"I have heard that you are a great company to work for and you have a good reputation in the industry. I think it would be a great place to develop my career.",strong:"I want to work for the Scottish Government Digital Directorate specifically because of the scale and social impact of the digital transformation work. The development of myaccount — which now serves over a million citizens — and the ongoing work on digital public services means that what I build here will be used by real people across Scotland. I have also followed the Scottish Government's digital standards and I am struck by how seriously accessibility and user-centred design are taken. That is the professional culture I want to develop in. I am also aware that the Scottish Government consistently invests in its apprentices beyond the minimum — the structured mentorship and CPD support gives me confidence that the learning environment will match the professional one."},
  {q:"Tell me about a time you had to learn something you found genuinely difficult.",tip:"Show your process, not just your resilience. How you approach difficulty is what they are assessing.",weak:"I found Higher Maths really hard at first. I kept practising and eventually I got better at it. I passed with a B.",strong:"In my first year of Higher Maths, I consistently lost marks on calculus questions despite understanding the underlying concepts. I was getting the methods right but making consistent arithmetic errors under time pressure. I identified the pattern by reviewing six past papers and found I was making errors specifically in the chain rule steps when the expressions were complex. Rather than simply practising more of the same, I changed my approach: I started writing out every intermediate step explicitly — even those that felt obvious — to eliminate the mental shortcuts where errors crept in. I also timed myself on individual question types rather than full papers, which isolated where my speed was suffering. By the end of S5 my calculus accuracy in mocked conditions had improved from about 60% to 90%. I carried that diagnostic approach into other subjects — looking for the specific source of errors rather than just working harder."},
  {q:"What do you understand about the demands of this framework and how will you manage them?",tip:"Demonstrate that you have researched the specific GA, understand the dual demands, and have a realistic plan.",weak:"I know it will be challenging to balance work and study but I am committed and I will manage my time well. I am a hard worker so I think I will cope.",strong:"I understand that this programme requires me to work four days per week in a professional software development environment and dedicate the fifth day to university study at Edinburgh Napier, with additional academic work required around deadlines. I know from speaking to current apprentices that the first year is the most demanding — adapting to professional culture and university-level academic work simultaneously requires more active management than either alone. My plan is: to create a complete schedule at the start of each semester that maps all university deadlines against work commitments and share it with my line manager; to identify within the first month who my workplace mentor is and establish a regular meeting cadence; and to be proactive with my personal academic tutor at the first sign of any academic difficulty rather than hoping it resolves. I have been managing work, school and sport simultaneously for two years, which gives me confidence in my capacity for the dual demands — but I am realistic that a GA is a step up from that and I intend to treat it accordingly."},
  {q:"Describe a time you showed initiative — you identified a problem and acted without being asked.",tip:"GA employers want self-starters. The example should show initiative, not just competence.",weak:"At work I noticed the stockroom was untidy so I tidied it up without being asked. My manager was pleased.",strong:"During my time at Tesco I noticed that new colleagues were consistently making the same three errors in the first month — entering certain promotional codes incorrectly, mishandling certain refund processes, and not following the correct procedure for challenged age-restricted purchases. Each of these was resulting in either financial loss or compliance risk. Rather than pointing this out to the manager as a complaint, I spent three evenings creating a one-page quick-reference guide covering all three areas with clear step-by-step instructions and visual cues. I shared a draft with the manager, who reviewed and approved it, and it was then incorporated into the onboarding pack for all new colleagues. In the four months since, the manager has mentioned that the errors I had identified have significantly reduced. The initiative was not the document itself — it was identifying the pattern, choosing to act on it constructively, and building something scalable rather than just raising a complaint."},
  {q:"What questions do you have for us?",tip:"Never say none. GA questions should demonstrate sector knowledge, genuine curiosity and forward-thinking about your development.",weak:"No, I think you have covered everything thank you.",strong:"I have three. First — how is the work-study balance structured in practice for this specific team? I want to understand not just the formal one-day-a-week arrangement but how academic deadlines are typically handled in peak work periods. Second — what does the typical career trajectory look like for someone who completes this apprenticeship in this team? I am thinking specifically about progression beyond junior developer and what the internal opportunities look like. Third — I noticed in your recent annual report that the team is working on the expansion of the digital identity platform. Is that something apprentices have visibility of or contribute to, even at a junior level?"},
];

function InterviewModule(){
  const [current,setCurrent]=useState(0);
  const [reveal,setReveal]=useState(null);
  const q=INTERVIEW_QS[current];
  return (
    <div>
      <PageHeader icon="🎤" title="Interview Preparation" subtitle="GA-specific questions — including the ones most candidates answer badly, and what a strong answer looks like."/>
      <InfoBox text="GA interviews assess at a higher standard than MA interviews. The panel is looking for degree-level potential — analytical thinking, self-awareness, genuine motivation and professional maturity. Prepare accordingly." type="info"/>
      <NavTabBar options={INTERVIEW_QS.map((_,i)=>({id:i,label:`Q${i+1}`}))} active={current} onSelect={(id)=>{setCurrent(id);setReveal(null);}}/>
      <Card>
        <p style={{color:MID,fontSize:11,textTransform:"uppercase",margin:"0 0 5px"}}>Interview question</p>
        <p style={{color:NAVY,fontWeight:800,fontSize:15,margin:"0 0 12px"}}>"{q.q}"</p>
        <div style={{background:"#FAF5FF",borderLeft:`3px solid ${PLUM}`,borderRadius:8,padding:"9px 11px"}}>
          <p style={{color:"#581C87",fontSize:13,lineHeight:1.6,margin:0}}>💡 <strong>Coach tip:</strong> {q.tip}</p>
        </div>
      </Card>
      <div style={{display:"flex",gap:8,marginBottom:12}}>
        <button onClick={()=>setReveal(reveal==="strong"?null:"strong")} style={{flex:1,padding:10,background:reveal==="strong"?GREEN:WHITE,border:`2px solid ${GREEN}`,color:reveal==="strong"?WHITE:GREEN,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="strong"?"Hide":"✓ Strong"}</button>
        <button onClick={()=>setReveal(reveal==="weak"?null:"weak")} style={{flex:1,padding:10,background:reveal==="weak"?RUST:WHITE,border:`2px solid ${RUST}`,color:reveal==="weak"?WHITE:RUST,borderRadius:8,fontWeight:700,fontSize:12,cursor:"pointer",fontFamily:"inherit",textTransform:"uppercase"}}>{reveal==="weak"?"Hide":"✗ Weak"}</button>
      </div>
      {reveal==="strong"&&<div style={{background:"#F0FDF4",borderLeft:`3px solid ${GREEN}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:GREEN,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Strong Answer</p><p style={{color:"#14532D",fontSize:14,lineHeight:1.7,margin:0}}>{q.strong}</p></div>}
      {reveal==="weak"&&<div style={{background:"#FEF2F2",borderLeft:`3px solid ${RUST}`,borderRadius:10,padding:14,marginBottom:12}}><p style={{color:RUST,fontWeight:700,fontSize:11,textTransform:"uppercase",margin:"0 0 8px"}}>Weak Answer</p><p style={{color:"#7F1D1D",fontSize:14,lineHeight:1.7,margin:0}}>{q.weak}</p></div>}
      <Card>
        <p style={{color:TEAL,fontWeight:700,fontSize:12,margin:"0 0 8px",textTransform:"uppercase"}}>🎤 Practise your answer</p>
        <textarea placeholder="Type your answer here using the STAR method..." rows={4} style={{width:"100%",background:GREY,border:"1px solid #E2E8F0",borderRadius:8,padding:12,color:NAVY,fontSize:13,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box"}}/>
        <p style={{color:MID,fontSize:12,marginTop:8,marginBottom:0}}>💡 Paste into the AI Coach for feedback.</p>
      </Card>
    </div>
  );
}

// ─── COACHING ─────────────────────────────────────────────────────────────────
function CoachingModule(){
  const [stage,setStage]=useState("before");
  const stages={
    before:{label:"Before you apply",icon:"🔍",prompts:[
      {title:"Self-discovery",questions:["What subjects at school do I genuinely enjoy, and what does that tell me about my strengths and interests?","When I imagine myself at work in ten years' time, what am I doing? What kind of environment am I in?","What are the three things that matter most to me in a job — salary, creativity, helping others, problem-solving, working with technology?","What are my greatest strengths? What would my teachers, friends or family say I am particularly good at?","Am I choosing a GA because it is right for me — or because it sounds impressive, or because someone else suggested it?"]},
      {title:"Research and exploration",questions:["Have I explored all 15 GA frameworks? Which ones align most closely with my interests and strengths?","Have I spoken to anyone currently working in the industry I am considering? What did I learn?","Have I visited apprenticeships.scot to explore current vacancies and understand what employers are looking for?","What additional qualifications, skills or experiences could I develop before applying to strengthen my application?","Can I articulate clearly — in two minutes — why I want a GA rather than a Modern Apprenticeship or full-time university?"]},
      {title:"Readiness check",questions:["Do I genuinely have the organisational capacity to manage full-time employment and degree-level study?","What is my track record of managing multiple commitments? Does it support the confidence I feel?","Who in my life will support me through the demanding periods — and have I talked to them about what a GA actually involves?","What would I do if the workload became unmanageable in year 1? Do I know where to seek support?","Am I applying to employers whose work I find genuinely interesting — or just applying broadly to maximise my chances?"]},
    ]},
    during:{label:"During your GA",icon:"📈",prompts:[
      {title:"Performance and development",questions:["What are the three most important things I have learned this month — at work and at university?","What feedback have I received recently, and what specific actions can I take to act on it?","What skills do I want to develop in the next six months? Who in my workplace or university can help me achieve this?","Am I making the most of my workplace mentor? What questions should I bring to our next meeting?","How is my university learning connecting to my day-to-day work? Can I identify a specific example from this week?"]},
      {title:"Wellbeing and resilience",questions:["Am I managing my workload effectively? If not, what specific changes can I make?","Who are the people — at work, at university and at home — who support me? Have I been open with them about any challenges?","What do I do to recharge and look after my mental health? Am I making enough time for this?","Is the workload genuinely unmanageable, or is it hard in the normal way that growth always is? How do I know the difference?","If I am struggling, have I raised it with my workplace mentor and personal academic tutor? If not, what is stopping me?"]},
      {title:"Building your professional identity",questions:["What professional networks am I building? Am I connected on LinkedIn to colleagues, university peers and industry professionals?","What is my reputation within my team? What would my manager say about me if asked?","Am I treating the work-based project as a genuine research opportunity — or as a box to tick?","What do I know about my sector now that I did not know when I started? What do I want to know next?","Am I keeping a record of my achievements and learning — a portfolio I can use in future applications and interviews?"]},
    ]},
    after:{label:"After your GA",icon:"🚀",prompts:[
      {title:"Career vision",questions:["What kind of professional do I want to be in five years? What specific role, level or specialism am I aiming for?","What professional accreditation would most enhance my career prospects, and what is my plan for achieving it?","Have I built a strong professional network during my apprenticeship? Who are the key people I should stay connected with?","What are the gaps in my skills or experience that I need to address in my next role?","Am I considering staying with my current employer, moving to a new organisation, or exploring self-employment? What are the pros and cons of each?"]},
      {title:"Further study",questions:["Does postgraduate study (MSc, MBA, PhD) make sense for my career goals? What specifically would it add?","Are there professional qualifications (RICS, ACCA, CEng, CISSP) that I should pursue and what is the timeline?","Has my employer offered to support further study? Have I had that conversation?","What would I study if money and time were not constraints? Does that tell me something important about my direction?"]},
    ]},
  };
  const s=stages[stage];
  return (
    <div>
      <PageHeader icon="🧠" title="Coaching Prompts" subtitle="A three-stage reflective framework — before, during and after your Graduate Apprenticeship."/>
      <InfoBox text="These prompts are most useful when treated as genuine questions rather than items to tick off. If a question makes you uncomfortable, that discomfort is useful information." type="purple"/>
      <div style={{display:"flex",gap:8,marginBottom:16}}>
        {Object.entries(stages).map(([k,v])=>(
          <button key={k} onClick={()=>setStage(k)} style={{flex:1,padding:"10px 8px",background:stage===k?NAVY:WHITE,color:stage===k?WHITE:MID,border:`1px solid ${stage===k?NAVY:"#E2E8F0"}`,borderRadius:10,fontWeight:stage===k?800:400,fontSize:12,cursor:"pointer",fontFamily:"inherit",textAlign:"center"}}>
            <div style={{fontSize:18,marginBottom:4}}>{v.icon}</div>
            <div style={{textTransform:"uppercase",letterSpacing:0.3,fontSize:11}}>{v.label.split(" ")[0]}</div>
          </button>
        ))}
      </div>
      {s.prompts.map((group,i)=>(
        <Card key={i}>
          <p style={{color:PLUM,fontWeight:700,fontSize:13,margin:"0 0 12px",textTransform:"uppercase",letterSpacing:0.5}}>{group.title}</p>
          {group.questions.map((q,j)=>(
            <div key={j} style={{display:"flex",gap:10,marginBottom:10,alignItems:"flex-start"}}>
              <div style={{width:22,height:22,background:"#FAF5FF",border:`1px solid ${PLUM}30`,borderRadius:6,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1}}>
                <span style={{color:PLUM,fontSize:10,fontWeight:700}}>{j+1}</span>
              </div>
              <p style={{color:"#444",fontSize:13,lineHeight:1.6,margin:0}}>{q}</p>
            </div>
          ))}
        </Card>
      ))}
    </div>
  );
}

// ─── AI COACH ─────────────────────────────────────────────────────────────────
function CoachModule(){
  const [messages,setMessages]=useState([{role:"assistant",content:"I am your TASS Graduate Apprenticeship Coach.\n\nI can help you with:\n• Choosing the right framework — which GA suits your background and goals\n• GA vs MA — honest comparison for your specific situation\n• CV and cover letter feedback — paste your draft and I will review it\n• STAR answer building — share a real experience and I will structure it at GA level\n• Interview preparation — GA-specific competency and motivational questions\n• Supporting statement guidance — for MyJobScotland public sector applications\n• Am I ready? — honest assessment of your readiness\n• Specific frameworks — universities, employers, entry requirements, accreditation\n\nWhat would you like to work on?"}]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[messages]);
  const PROMPTS=["Which GA framework is right for me?","Give feedback on my personal profile","Help me build a STAR answer for a GA interview","What is the difference between a GA and an MA?","How do I write a strong cover letter for a GA?","Am I ready for a Graduate Apprenticeship?"];

  async function send(){
    if(!input.trim()||loading)return;
    const userMsg=input.trim(); setInput("");
    const newMsgs=[...messages,{role:"user",content:userMsg}];
    setMessages(newMsgs); setLoading(true);
    try{
      const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({
        model:"claude-sonnet-4-5-20250929",max_tokens:1000,
        system:`You are the TASS Graduate Apprenticeship Coach — a direct, expert careers coach helping young people (16–29) and career changers in Scotland understand, apply for and succeed in Graduate Apprenticeships.

Your approach:
- Specific and direct — no vague encouragement. Give actual next steps.
- Scotland-specific: you know the Scottish GA framework thoroughly — all 15 frameworks, SCQF levels (9, 10, 11), SAAS funding, Skills Development Scotland, Scottish Funding Council, participating universities (Strathclyde, Heriot-Watt, Edinburgh Napier, Glasgow, GCU, RGU, Dundee, UWS), and major employers (JP Morgan, ScottishPower, Leonardo, Balfour Beatty, NHS Scotland, Scottish Government).
- Honest about the GA demands: you do not oversell. A GA is full-time employment AND degree-level study simultaneously. You help candidates assess their genuine readiness, not just their enthusiasm.
- GA vs MA clarity: you can clearly explain the difference and help candidates choose the right route for their specific situation. You never assume a GA is always superior.
- Application expertise: you know what strong personal statements, CVs and STAR answers look like for GA applications — they are assessed at a higher level than MA applications and you coach accordingly.
- Interview knowledge: you know the GA-specific interview questions, especially 'why GA not university' which most candidates answer poorly.

Key frameworks to know in depth:
IT: Software Development (SCQF 10), Cyber Security (SCQF 10/11 at Strathclyde), Data Science, IT: Management for Business, Engineering: Design and Manufacture (IMechE accredited), Civil Engineering (ICE accredited), Construction and Built Environment (RICS/CIOB accredited), Business Management, Accounting with Professional Accreditation (ACCA aligned), Early Learning and Childcare (SCQF 9).

Entry: typically 4 Highers at BBBB. Alternative entry via Foundation Apprenticeship, HNC/HND (often advanced entry to year 2), RPL for career changers. SAAS funds tuition fees. No upper age limit.

Recruitment calendar: January–March for September starts. apprenticeships.scot and MyJobScotland are the primary portals.

When reviewing CVs or personal statements: GA applications are assessed at a higher standard than MA applications. Evidence of degree-level potential — analytical thinking, self-direction, genuine sector interest and academic achievement — is what you look for and coach towards.

Keep responses focused and mobile-friendly.`,
        messages:newMsgs.map(m=>({role:m.role,content:m.content}))
      })});
      const data=await res.json();
      const reply=data.content?.[0]?.text||"Connection issue — please try again.";
      setMessages([...newMsgs,{role:"assistant",content:reply}]);
    }catch(error){
      setMessages([...newMsgs,{role:"assistant",content:`Connection issue — please try again. (${error.message})`}]);
    }
    setLoading(false);
  }

  return (
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 180px)",minHeight:480}}>
      <div style={{background:"#FAF5FF",borderLeft:`3px solid ${PLUM}`,borderRadius:8,padding:"9px 13px",marginBottom:10}}>
        <p style={{color:"#581C87",fontSize:13,margin:0}}>💡 Ask anything about Graduate Apprenticeships — framework choice, CV feedback, interview prep, readiness assessment or application guidance.</p>
      </div>
      <div style={{display:"flex",gap:6,marginBottom:10,overflowX:"auto",paddingBottom:4}}>
        {PROMPTS.map((p,i)=><button key={i} onClick={()=>setInput(p)} style={{background:PLUM+"15",border:`1px solid ${PLUM}40`,color:PLUM,borderRadius:99,padding:"5px 11px",whiteSpace:"nowrap",fontSize:11,fontWeight:600,cursor:"pointer",flexShrink:0,fontFamily:"inherit"}}>{p}</button>)}
      </div>
      <div style={{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:12,paddingRight:4,paddingBottom:8}}>
        {messages.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start"}}>
            <div style={{maxWidth:"88%",padding:"10px 14px",borderRadius:m.role==="user"?"14px 14px 4px 14px":"14px 14px 14px 4px",background:m.role==="user"?NAVY:WHITE,color:m.role==="user"?WHITE:NAVY,fontSize:13,lineHeight:1.7,whiteSpace:"pre-wrap",border:m.role==="assistant"?"1px solid #E2E8F0":"none",boxShadow:m.role==="assistant"?"0 1px 4px rgba(0,0,0,0.06)":"none"}}>{m.content}</div>
          </div>
        ))}
        {loading&&<div style={{display:"flex",justifyContent:"flex-start"}}><div style={{background:WHITE,border:"1px solid #E2E8F0",borderRadius:"14px 14px 14px 4px",padding:"11px 15px",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}><div style={{display:"flex",gap:4}}>{[0,1,2].map(i=><div key={i} style={{width:6,height:6,background:PLUM,borderRadius:99,animation:`b 1.2s ${i*0.2}s infinite`}}/>)}</div></div></div>}
        <div ref={bottomRef}/>
      </div>
      <div style={{display:"flex",gap:8,marginTop:10}}>
        <textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} placeholder="Ask your coach anything..." rows={3} style={{flex:1,background:WHITE,border:"1px solid #E2E8F0",borderRadius:10,padding:"10px 13px",color:NAVY,fontSize:13,fontFamily:"inherit",resize:"none",minHeight:60,boxSizing:"border-box",lineHeight:1.65}}/>
        <button onClick={send} disabled={loading||!input.trim()} style={{background:input.trim()?PLUM:"#E2E8F0",border:"none",color:input.trim()?WHITE:"#999",borderRadius:10,padding:"0 16px",cursor:input.trim()?"pointer":"default",fontSize:20}}>↑</button>
      </div>
      <style>{`@keyframes b{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}`}</style>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function TASSGraduate(){
  const [tab,setTab]=useState("home");
  const current=TABS.find(t=>t.id===tab);
  return (
    <div style={{fontFamily:"'Segoe UI', system-ui, sans-serif",background:GREY,minHeight:"100vh",color:NAVY}}>
      <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: ${GREY}; } ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 4px; } textarea:focus, button:focus { outline: 2px solid ${PLUM}; outline-offset: 2px; }`}</style>
      {tab!=="home"&&(
        <div style={{background:`linear-gradient(135deg, ${NAVY} 0%, #1A3060 100%)`,padding:"12px 16px",display:"flex",alignItems:"center",gap:12,position:"sticky",top:0,zIndex:100,boxShadow:"0 2px 8px rgba(0,0,0,0.15)"}}>
          <TASSLogo size="sm" theme="dark"/>
          <div style={{width:1,height:32,background:"rgba(255,255,255,0.15)",margin:"0 4px"}}/>
          <div style={{flex:1}}>
            <div style={{color:"rgba(255,255,255,0.6)",fontWeight:700,fontSize:11,textTransform:"uppercase",letterSpacing:0.5}}>Graduate Apprenticeship</div>
            <div style={{color:WHITE,fontSize:13,fontWeight:700,marginTop:2}}>{current?.icon} {current?.label}</div>
          </div>
        </div>
      )}
      <div style={{maxWidth:640,margin:"0 auto",padding:"20px 16px 110px"}}>
        {tab==="home"      &&<HomeModule setTab={setTab}/>}
        {tab==="what"      &&<WhatModule/>}
        {tab==="vsma"      &&<VSMAModule/>}
        {tab==="frameworks"&&<FrameworksModule/>}
        {tab==="ready"     &&<ReadyModule/>}
        {tab==="apply"     &&<ApplyModule/>}
        {tab==="mjs"       &&<MJSModule/>}
        {tab==="cv"        &&<CVModule/>}
        {tab==="star"      &&<STARModule/>}
        {tab==="interview" &&<InterviewModule/>}
        {tab==="coaching"  &&<CoachingModule/>}
        {tab==="coach"     &&<CoachModule/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:WHITE,borderTop:"1px solid #E2E8F0",display:"flex",justifyContent:"center",padding:"8px 2px 12px",zIndex:100,boxShadow:"0 -2px 12px rgba(0,0,0,0.06)"}}>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{flex:1,maxWidth:52,background:"none",border:"none",cursor:"pointer",padding:"5px 2px",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
            <div style={{fontSize:13,filter:tab===t.id?"none":"grayscale(1) opacity(0.3)"}}>{t.icon}</div>
            <div style={{fontSize:6,color:tab===t.id?PLUM:"#999",fontWeight:tab===t.id?800:400,textTransform:"uppercase",letterSpacing:"0.02em"}}>{t.label.substring(0,5)}</div>
            {tab===t.id&&<div style={{width:12,height:2,background:PLUM,borderRadius:2}}/>}
          </button>
        ))}
      </div>
    </div>
  );
}
