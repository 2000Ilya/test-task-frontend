import React, { Component } from "react";
import Channel from "../../components/Channel/Channel.jsx";

class ChannelsList extends Component {
  render() {
    return (
      <div className="channels-list-container">
        <Channel
          position={{ padding: "49px 175px" }}
          channel_logo_url="images/channel-logo/first.svg"
          channel_name="Первый канал"
          telecast={[
            "Новости (с субтитрами)",
            "Давай поженимся",
            "Другие новости",
          ]}
        />
        <Channel
          position={{ padding: "56px 143px" }}
          channel_logo_url="images/channel-logo/2x2.svg"
          channel_name="2x2"
          telecast={[
            "МУЛЬТ ТВ. Сезон 4, 7 серия",
            "ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия",
            "БУРДАШЕВ. Сезон 1, 20 серия",
          ]}
        />
        <Channel
          position={{ padding: "54px 172px" }}
          channel_logo_url="images/channel-logo/rbc.svg"
          channel_name="РБК"
          telecast={[
            "ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС",
            "ДЕНЬ. Главные темы",
            "Главные новости",
          ]}
        />
        <Channel
          position={{ padding: "48px 168px" }}
          channel_logo_url="images/channel-logo/amedia.svg"
          channel_name="AMEDIA PREMIUM"
          telecast={[
            "Клиент всегда мёртв",
            "Голодные игры: Сойка-пересмешница. Часть I",
            "Секс в большом городе",
          ]}
        />
        <Channel
          position={{ padding: "57px 95px", width: "210px", height: "48px" }}
          channel_logo_url="images/channel-logo/tv1000.svg"
          channel_name="TV1000"
          telecast={["Однажды в Америке", "Предчувствие", "Остров проклятых"]}
        />
        <Channel
          position={{ padding: "43px 163px", width: "75px", height: "75px" }}
          channel_logo_url="images/channel-logo/mir.svg"
          channel_name="МИР"
          telecast={["Маршалы победы", "Новости", "Крепкий орешек"]}
        />
      </div>
    );
  }
}

export default ChannelsList;
