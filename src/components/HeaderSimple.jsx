import {
  Group,
  Text,
  Container,
  Burger,
  Drawer,
  Box,
  Divider,
} from '@mantine/core';
import { useState } from 'react';;
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import ARCICON from '../assets/hoverlogo.png';
import classes from './HeaderSimple.module.css';

const linksData = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'The Team' },
  { link: '/projects', label: 'Projects' },
  { link: 'https://wikipage.purduearc.com/', label: 'Wiki' },
  { link: 'mailto:autonomy@purdue.edu', label: 'Email Us' },
];

export function HeaderSimple() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [active, setActive] = useState(linksData[0].link);

  const menuItems = linksData.map((item) => (
    <Link key={item.label} to={item.link} className={classes.link} data-active={active === item.link || undefined} onClick={(event) => {event.preventDefault;setActive(item.link);closeDrawer()}}>
      <Text fz='sm' c={'white'}>{item.label}</Text>
    </Link>
  ));

  return (
    <Box pb={50}>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <Link to="/" onClick={() => {closeDrawer();setActive('/')}} >
            <img
              src={ARCICON}
              alt="ARCICON"
              className={classes.logo}
              style={{ height: '60px', marginRight: '30px', cursor: 'pointer' ,zIndex: 3, position: 'relative' }}

            />
          </Link>

          <Group h="100%" gap={5} visibleFrom="sm">
            {menuItems}
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Pages"
        hiddenFrom="sm"
        zIndex={1000000}
      >
          <Divider my="sm" />
            {menuItems}
          <Divider my="sm" />
      </Drawer>
    </Box>
  );
}
