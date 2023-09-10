import { BlockHeader, BlockWrapper, MainHeader, MainSlogan, Text } from './MainSection.styled';

const MainSection = () => {
  return (
    <section>
      <MainHeader>About Car Rental</MainHeader>
      <MainSlogan>
        What is the Car Rental? Taking care of our customers, our communities and our employees.
      </MainSlogan>
      <BlockWrapper>
        <div>
          <BlockHeader>Culture and hard work created by Car Rental</BlockHeader>
          <Text>
            Enterprise Rental Car is an ongoing ukrainian success story. Our guiding principles, and
            humble beginning, revolve around personal honesty and integrity. We believe in
            strengthening our communities one neighborhood at a time, serving our customers as if
            they were our family, and rewarding hard work. These things are as true today as they
            were when we were founded in 2003.
          </Text>
          <Text>
            Today, our network means Rental Car is a big transportation solutions provider. We offer
            modern car rentals. We take an active role in sustainability, not only because it’s
            smart for our business, but because we believe in making the world a better place for
            future generations. Because of our size, we are in a unique position to foster
            innovation, advance research and test market-driven solutions.
          </Text>
          <Text>
            Rental Car is now a household name for frequent travelers, road trippers and those with
            a car in the shop. We are a brand that is recognized as a domestic leader in the car
            rental industry. We value employees and customers as much as a member of the family.
            Today Rental Car continues to drive success through a simple, yet powerful set of
            beliefs to become a leader in car rental, serving all of your transportation needs.
          </Text>
        </div>
        <div>
          <BlockHeader>Services are available for you</BlockHeader>
          <ul>
            <li>
              <Text>
                Travel safely – we handle all risks on our own. All of our cars have valid insurance
                policies.
              </Text>
            </li>
            <li>
              <Text>
                Never get lost and save time with the GPS-navigation device which will calculate the
                best route for you.
              </Text>
            </li>
            <li>
              <Text>
                Traveling with children? Take care of their safety with a comfortable child seat.
              </Text>
            </li>
            <li>
              <Text>
                Stay connected and in touch with all goings-on with a high-speed Wi-Fi Internet.
              </Text>
            </li>
            <li>
              <Text>
                Round-the-clock support with any questions, be it hotel reservations or finding the
                best tours and products.
              </Text>
            </li>
            <li>
              <Text>
                Ran out of the fuel? Need help replacing a broken wheel? The battery has to be
                charged? Get in touch with us and our team will arrive to help you on the road.
              </Text>
            </li>
          </ul>
        </div>
      </BlockWrapper>
    </section>
  );
};

export default MainSection;
