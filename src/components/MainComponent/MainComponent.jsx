import React, { Component } from 'react';
import '../../components/MainComponent/MainComponent.css';
import Logo from '../../components/Logo/Logo.jsx';
import InputForm from '../../components/InputForm/InputForm.jsx';
import SearchForm from '../../components/SearchForm/SearchForm.jsx';
import Button from "../../components/Button/Button.jsx";
import GenreCard from "../../components/GenreCard/GenreCard.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FilmCard from "../../components/FilmCard/FilmCard.jsx";
import LogInForm from "../../components/LogInForm/LogInForm.jsx";
import TabFilms from "../../components/TabFilms/TabFilms.jsx";
import Channel from "../../components/Channel/Channel.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";

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
                <Checkbox />
                <br></br>
                <br></br>
                <br></br>
                <GenreCard color="linear-gradient(136.27deg, #828282 8.44%, #333333 91.36%)" smile="👻" genre="ужасы" />
                <br></br>
                <br></br>
                <br></br>
                <GenreCard color="linear-gradient(136.27deg, #F2C94C 8.44%, #F29A4A 91.36%)" smile="😁" genre="комедии" />
                <br></br>
                <br></br>
                <br></br>
                <GenreCard color="linear-gradient(136.27deg, #56CCF2 8.44%, #2F80ED 91.36%)" smile="👽" genre="фантастика" />
                <br></br>
                <br></br>
                <br></br>
                <GenreCard color="linear-gradient(136.27deg, #F2994A 8.44%, #EB5757 91.36%)" smile="😭" genre="драмы" />
                <br></br>
                <br></br>
                <br></br>
                <Header />
                <br></br>
                <br></br>
                <br></br>
                <Footer />
                <br></br>
                <br></br>
                <br></br>
                <FilmCard film_url="/images/movie-card/cat.png" film_caption="Мульт в кино. Выпуск №103. Некогда грустить!" description="В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша научит завязывать шнурки. Также зрители увидят новые серии мультфильмов «Четверо в кубе», «Лео и Тиг» и совершенно новый мультсериал «Снежная королева: Хранители чудес»." />
                <br></br>
                <br></br>
                <br></br>
                <FilmCard film_url="/images/movie-card/batman.png" film_caption="Новый Бэтмен" description="В детстве юный наследник огромного состояния Брюс Уэйн оказался свидетелем убийства своих родителей, и тогда он решил бороться с преступностью. Спустя годы он отправляется в путешествие по миру, чтобы найти способ восстановить справедливость. Обучение у мудрого наставника боевым искусствам дает ему силу и смелость. Вернувшись в родной город, Уэйн становится Бэтменом и ведет борьбу со злом." />
                <br></br>
                <br></br>
                <br></br>
                <FilmCard film_url="/images/movie-card/hollywood.png" film_caption="Однажды... в Голливуде" description="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии." />
                <br></br>
                <br></br>
                <br></br>
                <FilmCard film_url="/images/movie-card/girl.png" film_caption="Стриптизёрши" description="Танцовщицы элитного стриптиз-клуба, клиенты которого — известные финансисты с Уолл-Стрит — привыкли к большим заработкам и роскошной жизни. Но после финансового кризиса 2008 года посетителей в клубе заметно поубавилось, и деньги к девушкам уже не текут рекой. Тяжёлые времена требуют отчаянных мер, и бывшие танцовщицы решаются на авантюрный шаг." />
                <br></br>
                <br></br>
                <br></br>
                <LogInForm />
                <br></br>
                <br></br>
                <br></br>
                <TabFilms />
                <br></br>
                <br></br>
                <br></br>
                <Channel position={{"padding": "49px 175px"}} channel_logo_url="/images/channel-logo/first.svg" channel_name="Первый канал" telecast={["Новости (с субтитрами)", "Давай поженимся", "Другие новости"]} />
                <br></br>
                <br></br>
                <br></br>
                <Channel position={{"padding": "56px 143px"}} channel_logo_url="/images/channel-logo/2x2.svg" channel_name="2x2" telecast={["МУЛЬТ ТВ. Сезон 4, 7 серия", "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия", "БУРДАШЕВ. Сезон 1, 20 серия"]} />
                <br></br>
                <br></br>
                <br></br>
                <Channel position={{"padding": "54px 172px"}} channel_logo_url="/images/channel-logo/rbc.svg" channel_name="РБК" telecast={["ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС", "ДЕНЬ. Главные темы", "Главные новости"]} />
                <br></br>
                <br></br>
                <br></br>
                <Channel position={{"padding": "48px 168px"}} channel_logo_url="/images/channel-logo/amedia.svg" channel_name="AMEDIA PREMIUM" telecast={["Клиент всегда мёртв", "Голодные игры: Сойка-пересмешница. Часть I", "Секс в большом городе"]} />
                <br></br>
                <br></br>
                <br></br>
                <Channel position={{"padding": "57px 95px", "width": "210px", "height": "48px"}} channel_logo_url="/images/channel-logo/tv1000.svg" channel_name="TV1000" telecast={["Однажды в Америке", "Предчувствие", "Остров проклятых"]} />
                <br></br>
                <br></br>
                <br></br>
                <Channel position={{"padding": "43px 163px", "width": "75px", "height": "75px"}} channel_logo_url="/images/channel-logo/mir.svg" channel_name="МИР" telecast={["Маршалы победы", "Новости", "Крепкий орешек"]} />
            </div>
        );
    }
}

export default MainComponent;