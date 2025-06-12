import { NavLink } from 'react-router-dom';
import { Home, People, Settings } from '@mui/icons-material';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: ${({ open }) => (open ? '220px' : '60px')};
  background: #2c3e50;
  color: white;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
`;

const ToggleBtn = styled.button`/* styling */`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 12px;
  color: white;
  text-decoration: none;
  &:hover, &.active { background: #1abc9c; }
`;

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);
  return (
    <SidebarContainer open={open}>
      <ToggleBtn onClick={() => setOpen(o => !o)}>
        {open ? '←' : '→'}
      </ToggleBtn>
      <nav style={{ marginTop: 20 }}>
        <NavItem to="/" end><Home />{open && ' Dashboard'}</NavItem>
        <NavItem to="/users"><People />{open && ' Users'}</NavItem>
        <NavItem to="/settings"><Settings />{open && ' Settings'}</NavItem>
      </nav>
    </SidebarContainer>
  );
}
