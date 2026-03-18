import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'

function App() {
  return (
    <>
      <Header />
      <Food />
      <Footer />
      <hr />
      <Card /> <br />
      <Button />
      <br />
      <Student name="John Doe" age={"20"} isStudent={true} />
      <Student name="Jane Smith" age={22} isStudent={false} />
      <Student name="Taylor Swift" age={33} isStudent={false} />
      <Student name="Sam Johnson" age={20} isStudent={true} />
      <Student />
      <Student name={"Emily Davis"} />
      <UserGreeting isLoggedIn={true} />
      <List />
    </>
  );  
}



export default App
