import readmark from '../../assets/images/bookshelf.webp';
import flashcardsImg from '../../assets/images/logo-flashcards.png';
import oasisLogo from '../../assets/images/wild-oasis-logo.png';
import oasisWebsite from '../../assets/images/bg.png';
import Container from '../../components/Container';
import SectionTitle from '../../components/SectionTitle';
import ProjectCard from './ProjectCard';
import { S } from './Projects_Styles';

const projects = [
  {
    title: 'Readmark',
    text: 'A read-later app that lets you save, scrape, and summarize web content powered by AI. ',
    src: readmark,
    techs: 'TS, TanstackStart, BetterAuth, Firecrawl, Tailwind, Shadcn',
    links: {
      demoLink: 'https://readmark-seven.vercel.app',
      githubLink: 'https://github.com/NatYarm/Readmark',
    },
  },
  // {
  //   title: 'Flashcards',
  //   text: 'An interactive flashcard application built with React, designed to help users learn and memorize information through repetition and active recall.',
  //   src: flashcardsImg,
  //   techs: 'TS, React, RTK Query, CSS Modules',
  //   links: {
  //     demoLink: 'https://flashcards-olive.vercel.app/',
  //     githubLink: 'https://github.com/NatYarm/flashcards',
  //   },
  //   imageType: 'logo' as const,
  // },
  {
    title: 'The Wild Oasis',
    text: 'A hotel management application built with React, designed to streamline cabin bookings, guest management, and hotel operations.',
    src: oasisLogo,
    techs: 'React, Tanstack query, Supabase, Styled Components',
    links: {
      demoLink: 'https://the-wild-oasis-js-one.vercel.app/',
      githubLink: 'https://github.com/NatYarm/the-wild-oasis-js',
    },
    imageType: 'logo' as const,
  },
  {
    title: 'The Wild Oasis Website',
    text: 'A hotel booking website built with Next.js, allowing guests to explore luxury cabins, make reservations, and manage their bookings.',
    src: oasisWebsite,
    techs: 'Next.js, Tanstack query, Supabase, Tailwind',
    links: {
      demoLink: 'https://the-wild-oasis-website-ten-zeta.vercel.app/',
      githubLink: 'https://github.com/NatYarm/the-wild-oasis-website',
    },
  },
];

const Projects = () => {
  return (
    <S.ProjectsSection id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <S.ProjectsGrid>
          {projects.map((p) => (
            <ProjectCard
              title={p.title}
              text={p.text}
              src={p.src}
              techs={p.techs}
              key={p.title}
              links={p.links}
              imageType={p.imageType}
            />
          ))}
        </S.ProjectsGrid>
      </Container>
    </S.ProjectsSection>
  );
};

export default Projects;
