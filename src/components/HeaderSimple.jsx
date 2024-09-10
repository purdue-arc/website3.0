import { useState } from 'react';
import { Container, Group, Burger, Text} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { IconBrandGithub } from '@tabler/icons-react';
import ARCICON from '../assets/hoverlogo.png'
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'The Team' },
  { link: '/projects', label: 'Projects' },
  { link: 'https://wikipage.purduearc.com/', label: 'Wiki' },
  { link: 'mailto:autonomy@purdue.edu', label: 'Contact Us' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link key={link.label} to={link.link}  className={classes.link} data-active={active === link.link || undefined} onClick={(event) =>{event.preventDefault;setActive(link.link)}}>
        <Text fz='sm' c={'white'}> {link.label}</Text>
    </Link>
  ));

  return (
    //Arc Dark blue #121C40
    // style={{ backgroundColor: '#121C40' }}
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>

        <Link to="/" onClick={() => setActive('/')}>
          <img src={ARCICON} alt="ARCICON" className={classes.logo} style={{ height: '60px', marginRight: '30px', cursor: 'pointer' }} />
        </Link>


        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}