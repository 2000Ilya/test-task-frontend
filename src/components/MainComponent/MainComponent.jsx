import React, { Component } from 'react';
import '../../components/MainComponent/MainComponent.css';
import Logo from '../../components/Logo/Logo.jsx';
import InputForm from '../../components/InputForm/InputForm.jsx';
import SearchForm from '../../components/SearchForm/SearchForm.jsx';
import Button from "../../components/Button/Button.jsx";
import GenreCard from "../../components/GenreCard/GenreCard.jsx";

class MainComponent extends Component {
    render() {
        return (
            <div>
            <Logo />
            <br></br>
            <br></br>
            <InputForm />
            <br></br>
            <br></br>
            <SearchForm />
            <br></br>
            <br></br>
            <br></br>
            <Button />
            <br></br>
            <br></br>
            <br></br>
            <GenreCard />
            </div>
        );
    }
}

export default MainComponent; 