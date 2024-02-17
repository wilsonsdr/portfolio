import React from 'react';
import Section from '../../elements/Section';
import Title from '@/components/elements/Title';
import P from '@/components/elements/P';
import Image from 'next/image';

export default function About() {
  return (
    <Section>
      <Title>About</Title>
      <P>Hello my name is Wilson Reis, passionate for what I do and committed to delivering the best result, experience in front-end and back-end, allowing me to work on various fronts in Software Development field.</P>
      <P>I believe that constant learning is the key to becoming an exceptional professional, and also that technology plays a crucial role in solving problems and improving people&apos;s quality of life. My goal is to contribute to this through my work.</P>
      <P>Besides my work, I have interested in philosophy, music, chess and I don&apos;t dismiss a good coffee.</P>
      <Image style={{ width: '260px', height: '260px' }} className='fixed -bottom-14 right-10 -z-50 opacity-50' src='/img/decorative/guitar.svg' width={240} height={240} alt='guitar' />
    </Section>
  );
}
