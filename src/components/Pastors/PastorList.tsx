import React, { useState } from "react";
import { Col, Row, Card } from "antd";
const { Meta } = Card;

interface IPastor {
  id: string;
  pic: string;
  title: string;
  description: string;
  alt: string;
}

const data = [
  {
    id: "pa1",
    pic: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672571897/pastorS_qzhnel.jpg",
    title: "Pastor C.O Sillo",
    description: "08037130048",
    alt: "Pastor Sillo",
  },
  {
    id: "pa2",
    pic: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672571897/pastorOLU_ltkokb.jpg",
    title: "Pastor J.S Olurishe",
    description: "08034748938",
    alt: "Pastor J.S Olurishe",
  },
  {
    id: "pa3",
    pic: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672573326/pastorL_nnigyj.jpg",
    title: "Pastor Lawal",
    description: "08065661575",
    alt: "Pastor Lawal",
  },
  {
      id: "pa5",
      pic: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672571897/PastorDa_sewabw.jpg",
      title: "Pastor Dariya",
      description: "08034531420",
      alt: "Pastor Dariya",
    },
    {
        id: "pa6",
        pic: "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672571897/pastorND_ogljaa.jpg",
        title: "Pastor Nden",
        description: "08034522216",
        alt: "Pastor Nden",
    },
    //  {
    //     id: 'pa4',
    //     pic: 'https://res.cloudinary.com/dpi44zxlw/image/upload/v1672571897/pastorOLO_bb13tf.jpg',
    //     title: 'Pastor Ologunleko',
    //     description: 'www.instagram.com',
    //     alt: 'Pastor Ologunleko'
    // },
    // {
    //     id: 'pa7',
    //     pic: 'https://res.cloudinary.com/dpi44zxlw/image/upload/v1672573748/pastorT_vg0wsc.jpg',
    //     title: 'Pastor Tongshine',
    //     description: '',
    //     alt: 'pastor Togshine'
    // }
];

const PastorList = () => {
  const [screen, setScreen] = useState<any>(window.screen.width);

  React.useEffect(() => {
    const resize = () => setScreen(window.screen.width);

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);
  const cardList = React.Children.toArray(
    data.map((list: IPastor) => {
      return (
        <Col span={8} style={{ marginBottom: "20px" }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt={list.alt} src={list.pic} />}
          >
            <Meta title={list.title} description={list.description} />
          </Card>
        </Col>
      );
    })
  );
  return (
    <div className="site-card-wrapper">
      {screen < 801 ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {React.Children.toArray(
            data.map((list: IPastor) => {
              return (
                <Card
                  hoverable
                  style={{ width: 240, marginBottom: 20 }}
                  cover={<img alt={list.alt} src={list.pic} />}
                >
                  <Meta title={list.title} description={list.description} />
                </Card>
              );
            })
          )}
        </div>
      ) : (
        <Row gutter={16}>{cardList}</Row>
      )}
    </div>
  );
};

export default PastorList;
