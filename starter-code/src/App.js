import React from "react"; 
import Navbar from "./Navbar"; 
import FormField from './FormField';
import CoolButton from "./CoolButton"; 

const App = () => {
    return (<div>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <CoolButton isSmall isDanger className="is-rounded my-class" name="Button 1"></CoolButton>
        <CoolButton isSmall isSuccess name="Button 2"></CoolButton>
    </div>)
}; 

export default App; 