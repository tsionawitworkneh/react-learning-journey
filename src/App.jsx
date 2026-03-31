import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import ProfilePicture from './ProfilePicture.jsx'
import MyComponet from './MyComponent.jsx'
import ColorPicker from './ColorPicker.jsx'
import CarComponent from './CarComponent.jsx'
import ToDoList from './ToDoList.jsx'


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

      <ProfilePicture />
      <MyComponet />

      <ColorPicker />

      <CarComponent />

      <ToDoList />
    </>
  );  
}



export default App
