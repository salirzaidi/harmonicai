import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from "@theme/Admonition";

const FeatureList = [
  {
    title: 'Motivation',
    description: (
      <>
        The ambitious vision of HarmonicAI is to build a human-machine collaborative multi-objective design framework to foster coherently explainable, fair and privacy-preserving AI for digital health. The framework will provide concrete technical and operational guidelines for AI practitioners to design human-centred, domain-specific, requirement-oriented trustworthy AI solutions, accelerating the scalable deployment of AI-powered digital health services and offering assurance to the public that AI in digital health is being developed and used in an ethical and trustworthy manner. The scope of HarmonicAI is multifaceted and multidimensional. An interdisciplinary and intersectoral approach is essential to address the various challenges of trustworthy AI. HarmonicAI draws together proven experts in AI, health care, IoT, data science, privacy, cyber security, software engineering, HCI and industrial design with an underlying common aim to design and develop innovative technologies and guidelines to resolve ethical issues with respect to fairness and data privacy, achieve transparency of AI models, and enhance safety and trust in the deployment of AI for digital health. Realising these complex goals demands a collective interdisciplinary, intersectoral, cross-border effort from a diverse variety of stakeholders including academia, industries and healthcare providers.
      </>
    ),
  },

];

function Feature({title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center padding-horiz--md">
      <Heading as="h3">{title}</Heading></div>
        <div className="text--justify padding-horiz--md">
        
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <div class="row" style={{marginLeft:"5%",marginRight:"5%",alignContent:"center"}}>

          <Tabs >
            <TabItem value="apple" label="R&I Objectives" attributes={{ className: styles.red }}>
             <Admonition icon="" type="note" title="RO1"> investigate healthcare stakeholders’ perceptions of current use of AI in digital health and gather requirements for the design of trustworthy AI solutions.</Admonition>
             <Admonition icon="" type="note" title="RO2"> build accurate, measurable and explainable AI models to improve AI transparency for digital health.</Admonition>
             <Admonition icon="" type="note" title="RO3"> establish a de-biasing strategy that contains a portfolio of technical and operational actions for fair AI deployment in digital health.</Admonition>
             <Admonition icon="" type="note" title="RO4"> develop a secure and privacy-preserving hybrid ML/DL learning paradigm for timely, prioritised and accurate predictions.</Admonition>
             <Admonition icon="" type="note" title="RO5"> develop a human-machine collaborative multi-objective model selection framework for coherently explainable, fair and privacy-preserving AI in digital health.</Admonition>
             <Admonition icon="" type="note" title="RO6"> implement, test and evaluate the developed trustworthy AI solutions in real-world digital health use cases.</Admonition>


    
 
            </TabItem>
            <TabItem value="orange" label="KT Objectives" attributes={{ className: styles.orange }}>
            <Admonition icon="" type="note" title="TO1"> (People): enhance the research and innovation potentials and career prospects of participating researchers including early career researchers (ESRs) and experienced researchers (ERs).</Admonition>
             <Admonition icon="" type="note" title="TO2"> (EU R&I potential): strengthen EU’s competitiveness and leading position in the development of human-centric, sustainable, secure, inclusive and trustworthy AI.</Admonition>
             <Admonition icon="" type="note" title="TO3"> (Link): strengthen existing research links among the leading researchers and institutions that allow the exchange of knowledge and professional training; develop new and sustainable cross-disciplinary, cross-sector and cross-border collaboration to build up world-leading overarching technologies and systems related to the future trustworthy AI in digital health.</Admonition>
             <Admonition icon="" type="note" title="TO4"> (Dissemination): effectively disseminate and exploit the outcomes of the project through project website, social media, publications and outreach activities.</Admonition>
             <Admonition icon="" type="note" title="TO5"> (Communication): engage the public in the research and innovation activities and communicate research outcomes with the public to promote AI and digital health technologies and applications.</Admonition>
            </TabItem>
            
          </Tabs>

</div>
      </div>
    </section>
  );
}
