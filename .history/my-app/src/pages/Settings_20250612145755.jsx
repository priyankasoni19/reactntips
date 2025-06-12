import axios from 'axios';
export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/api/users').then(res => setUsers(res.data));
  }, []);
  return users.length === 0 ? <p>Loading users...</p> : (
    <table>…map users…</table>
  );
}
