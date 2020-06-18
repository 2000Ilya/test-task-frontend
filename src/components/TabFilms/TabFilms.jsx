import React, { Component } from "react";
import FilmCard from "../../components/FilmCard/FilmCard.jsx";
import GenreCard from "../../components/GenreCard/GenreCard.jsx";

class TabFilms extends Component {
  render() {
    return (
      <div className="tab-films">
        <h1 className="tab-films-film-cards tab-films-header">🔥 Новинки</h1>
        <div className="tab-films-film-cards grid-container">
          <div className="tab-films-film-cards-item first">
            <FilmCard
              film_url="/images/movie-card/cat.png"
              film_caption="Мульт в кино. Выпуск №103. Некогда грустить!"
              description="В новом выпуске ми-ми-мишки изобретут машину сна, а Дракоша Тоша научит завязывать шнурки. Также зрители увидят новые серии мультфильмов «Четверо в кубе», «Лео и Тиг» и совершенно новый мультсериал «Снежная королева: Хранители чудес»."
            />
          </div>
          <div className="tab-films-film-cards-item second">
            <FilmCard
              film_url="/images/movie-card/batman.png"
              film_caption="Новый Бэтмен"
              description="В детстве юный наследник огромного состояния Брюс Уэйн оказался свидетелем убийства своих родителей, и тогда он решил бороться с преступностью. Спустя годы он отправляется в путешествие по миру, чтобы найти способ восстановить справедливость. Обучение у мудрого наставника боевым искусствам дает ему силу и смелость. Вернувшись в родной город, Уэйн становится Бэтменом и ведет борьбу со злом."
            />
          </div>
          <div className="tab-films-film-cards-item third">
            <FilmCard
              film_url="/images/movie-card/hollywood.png"
              film_caption="Однажды... в Голливуде"
              description="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
            />
          </div>
          <div className="tab-films-film-cards-item fourth">
            <FilmCard
              film_url="/images/movie-card/girl.png"
              film_caption="Стриптизёрши"
              description="Танцовщицы элитного стриптиз-клуба, клиенты которого — известные финансисты с Уолл-Стрит — привыкли к большим заработкам и роскошной жизни. Но после финансового кризиса 2008 года посетителей в клубе заметно поубавилось, и деньги к девушкам уже не текут рекой. Тяжёлые времена требуют отчаянных мер, и бывшие танцовщицы решаются на авантюрный шаг."
            />
          </div>
        </div>
        <h1 className="tab-films-genre-cards tab-films-header">Жанры</h1>
        <div className="tab-films-genre-cards grid-container">
          <div className="tab-films-genre-cards-item first">
            <GenreCard
              color="linear-gradient(136.27deg, rgba(242, 201, 76, 1) 8.44%, rgba(242, 154, 74, 1) 91.36%)"
              smile="😁"
              genre="комедии"
            />
          </div>
          <div className="tab-films-genre-cards-item second">
            <GenreCard
              color="linear-gradient(136.27deg, rgba(242, 153, 74, 1) 8.44%, rgba(235, 87, 87, 1) 91.36%)"
              smile="😭"
              genre="драмы"
            />
          </div>
          <div className="tab-films-genre-cards-item third">
            <GenreCard
              color="linear-gradient(136.27deg, rgba(86, 204, 242, 1) 8.44%, rgba(47, 128, 237, 1) 91.36%)"
              smile="👽"
              genre="фантастика"
            />
          </div>
          <div className="tab-films-genre-cards-item fourth">
            <GenreCard
              color="linear-gradient(136.27deg, rgba(130, 130, 130, 1) 8.44%, rgba(51, 51, 51, 1) 91.36%)"
              smile="👻"
              genre="ужасы"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TabFilms;
