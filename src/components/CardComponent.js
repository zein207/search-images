import { Card, Col, Text } from "@nextui-org/react";

const CardComponent = ({photos}) => {

  const open = (url) => window.open(url);

  return (
      <>
          {
              photos.map(photo => 
                  <Card cover key={photo.id} onClick={() => open(photo.links.html)} className="card-custom" >
                      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
                          <Col>
                              <Text
                                  size={12}
                                  weight="bold"
                                  transform="uppercase"
                                  color="#ffffffAA"
                              >
                                  {photo.description}
                              </Text>
                              <Text h4 color="white">
                                  {photo.alt_description}
                              </Text>
                          </Col>
                      </Card.Header>
                      <Card.Image
                          src={photo.urls.regular}
                          height={'100%'}
                          width="100%"
                          alt="Card image background"
                      />
                  </Card>
              )
          }
      </>

  );
};

export default CardComponent;
