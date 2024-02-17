import React from 'react';
import Section from '../../elements/Section';
import Title from '@/components/elements/Title';
import Hr from '@/components/elements/Hr';
import Subtitle from '@/components/elements/Subtitle';
import { Color } from '@/components/enum/color';
import Span from '@/components/elements/Span';
import P from '@/components/elements/P';
import Image from 'next/image';
import ListContainer, { ListItem } from '@/components/elements/List';
import { List } from '@/components/enum/list';

export default function Experience() {
  return (
    <Section>
      <Title>Experience</Title>
      <JobList
        company='Intervalor'
        role='Systems Analyst'
        startDate='May 2023'
        endDate='Present'
        description='Acting as the sole responsible for the application developed in Node.js at a credit recovery company, leading all stages of the operation and continuous improvement of micro-services, responsible for managing data from third-party team reports, and ensuring the communication and functioning of messaging services. My responsibilities include:'
        responsibilities={[
          "Developing and analyzing new projects within the application for each company client, focusing on the scalability and efficiency of the implemented solutions, according to each client's needs.",
          'Implementing new solutions and improvements in the application, always aiming to enhance its functionality, performance, usability, and the use of good security practices in data handling.',
          'Ensuring that information is inserted in the database and sent to internal and external APIs, prioritizing data integrity and security.',
          'Analyzing possible bugs, issues, or any eventualities in the application or database, working together and maintaining daily contact with the Business Intelligence team to identify, resolve, and prevent future issues.',
          'Actively participating in meetings or discussions to contribute insights and innovative ideas for application enhancement, collaborating with other teams or departments within the company.',
        ]}
        skills='Node.js · TypeScript · JavaScript · Git · Postman · MySQL · Jira · RabbitMQ · Kubernetes · Jenkins · Jaeger · Kibana · MinIO · Grafana · MicroSIP'
      />
      <Hr />
      <JobList
        company='IBM'
        role='Future Club Intern'
        startDate='August 2021'
        endDate='Dezember 2022'
        description='Engaging with a wide range of company tools and services, allowing for the creation of innovative and impactful solutions. One standout project is Pizzaria Donna, a landing page with a pizzeria-themed design, integrated with IBM Watson Assistant. This integration enabled the simulation of reports of domestic violence, using technology to promote awareness and aid for such a crucial issue.'
        skills='JavaScript · HTML · CSS · IBM Watson Assistant · IBM Cognos Analytics · IBM LinuxONE · IBM Cloud · IBM Z · User Experience (UX) · User Interface (UI) · IBM Storage'
      />
      <Hr />
      <JobList
        company='RTM'
        role='Telecommunications Intern'
        startDate='May 2021'
        endDate='Jul 2021'
        description='Providing technical support to clients, configuring and installing routers and voice equipment, as well as monitoring and managing network changes, and liaising with service providers to restore circuits in the event of failures or interruptions.'
        skills='Putty · Cacti · Topdesk · SolarWinds Orion'
      />
      <Image style={{ width: '192px', height: '192px' }} className='fixed right-10 top-14 -z-50 opacity-50 max-sm:right-0' src='/img/decorative/name-tag.svg' width={192} height={192} alt='name-tag' />
    </Section>
  );
}

interface JobListProps {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string;
  responsibilities?: string[];
}

export function JobList(props: JobListProps) {
  return (
    <>
      <Subtitle color={Color['highlight-color']}>
        {props.company} - {props.role}
      </Subtitle>
      <Span color={Color['info-color']} startDate={props.startDate} endDate={props.endDate} />
      <P>{props.description}</P>
      {props.responsibilities && props.responsibilities.length > 0 && (
        <ListContainer>
          {props.responsibilities.map((responsibility, index) => (
            <ListItem color={Color['primary-color']} disc={List.disc} key={index}>
              {responsibility}
            </ListItem>
          ))}
        </ListContainer>
      )}
      <P>
        <strong>Skills:</strong> {props.skills}
      </P>
    </>
  );
}
