import React from 'react';
import Section from '../../elements/Section';
import Title from '@/components/elements/Title';
import ShadowCard from '@/components/elements/ShadowCard';
import Link from 'next/link';
import Image from 'next/image';

export default function Project() {
  return (
    <Section>
      <Title>Project</Title>
      <div className='flex flex-col gap-10 max-sm:pb-8'>
        <ProjectViewer name='Pizzeria Donna' description='A landing page designed to resemble a pizzeria, but in reality, it serves as a domestic violence hotline.' href='https://github.com/wilsonsdr/pizzeria-donna' src='/img/project/pizza.jpg' alt='pizza' />
        <ProjectViewer name='Chess game' description='A simple chess game as a console application.' href='https://github.com/wilsonsdr/jogo-xadrez' src='/img/project/chess-table.jpg' alt='chess-table'></ProjectViewer>
        <ProjectViewer name='Bikcraft' description='Shop selling customized bicycles and insurance.' href='https://github.com/wilsonsdr/bikcraft' src='/img/project/bike.jpg' alt='bike'></ProjectViewer>
      </div>
      <Icon />
    </Section>
  );
}

interface ProjectViewerProps {
  name: string;
  description: string;
  href: string;
  src: string;
  alt: string;
}

export function ProjectViewer(props: ProjectViewerProps) {
  return (
    <ShadowCard>
      <div className='relative'>
        <div className='absolute left-0 top-0 h-full w-full opacity-0 transition-all duration-300 hover:bg-[#000] hover:opacity-90'>
          <div className='absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 transform flex-col gap-4 px-6 py-2 text-center text-secondary-color'>
            <h1 className='text-2xl'>{props.name}</h1>
            <span className='max-md:hidden'>{props.description}</span>
            <Link className='mx-auto block rounded-full bg-[#222] p-1 px-10 hover:bg-[#333]' href={props.href} target='_blank'>
              Check it out!
            </Link>
          </div>
        </div>
        <Image style={{ width: '100%', height: '240px' }} className='object-cover' width={1280} height={240} src={props.src} alt={props.alt} />
      </div>
    </ShadowCard>
  );
}

export function Icon() {
  return (
    <>
      <Image style={{ width: '64px', height: '64px' }} className='fixed right-20 top-10 -z-50 animate-pulse opacity-90 max-sm:right-10 max-sm:top-20' src='/img/decorative/star.svg' width={64} height={64} alt='star' />
      <Image style={{ width: '64px', height: '64px' }} className='fixed right-40 top-10 -z-50 animate-pulse opacity-30 max-sm:right-24 max-sm:top-14' src='/img/decorative/star.svg' width={64} height={64} alt='star' />
      <Image style={{ width: '64px', height: '64px' }} className='top-50 fixed right-32 -z-50 animate-pulse opacity-70' src='/img/decorative/star.svg' width={64} height={64} alt='star' />
      <Image style={{ width: '96px', height: '96px' }} className='fixed right-60 top-10 -z-50 opacity-50 max-sm:hidden' src='/img/decorative/cloud.svg' width={96} height={96} alt='cloud' />
      <Image style={{ width: '208px', height: '208px' }} className='fixed bottom-52 right-[430px] -z-50 rotate-45 opacity-50 max-sm:hidden' src='/img/decorative/rocket.svg' width={208} height={208} alt='rocket' />
    </>
  );
}
