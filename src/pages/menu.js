import { useRef, useEffect } from "react";

// Import components
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import PageBanner from "../components/PageBanner/PageBanner";

// Import GSAP
import { gsap, Power4 } from "gsap";

// Import SASS file
import styles from "../styles/Menu.module.scss";

function Menu() {
  // Refs
  let section = useRef(null);

  let tl = gsap.timeline({ delay: 0.3 });

  // GSAP animation
  useEffect(() => {
    // Section Animation
    tl.from(
      section.children,
      {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: Power4.easeOut,
      },
      0.2
    );
  }, [tl]);

  return (
    <>
      <Navigation />
      <PageBanner />

      <div className={styles.pageContent} ref={(e) => (section = e)}>
        <h2>Our Menu</h2>
        <hr className={styles.divider} />

        {/* Top Menu Container */}
        <div className={styles.topContainer}>
          {/* Soup & Salad Container */}
          <div className={styles.topLContainer}>
            <div className={styles.containerTitle}>
              <h4>Bistro Alfredo</h4>
              <p>
                Sautec Grilled Shredded Chicken, Cooked in Garlic & Mushroom
                Roasted Bell Pepper Creamy Sauce, Spice with Rode Chilli Flakes
                Topped with Grated Parmesan Cheese, Parsley
              </p>
            </div>
            <div>
              <h5>Native Jambalaya</h5>
              <p>
                Native Rice, Cooked With Shrimps, Calamari, Titus Boneless Fish,
                Uniza Leat Scent Leaf.
              </p>
              <br />

              <h5>Bistro Peppered Snails</h5>
              <p>
                Peppered Snails Soaked In Mint Leaf Tomato Sauce Chilli Flakes,
                Toasted Baguette Bread.
              </p>
              <br />

              <h5>Ocean Salad</h5>
              <p>
                Prawns, Calamari, Shrimps, Lettuce, Grapes, Herbs Sour Mayo
                Dressing.
              </p>
              <br />

              <h5>Bistro Salad</h5>
              <p>
                Yaji Suya Chicken, Lettuce, Turkey Ham, Boiled Eggs, Carrots
                Cucumber, Tomato, Cheddar Cheese, Bistro Salad Dressing.
              </p>
              <br />

              <h5>Eko Go Slow</h5>
              <p>
                Suya beef, peppered gizzard, chill wings, plantain or yam,
                chips, onions, tomato, yaji rice rolls.
              </p>
              <br />

              <h5>Lakes Pasta</h5>
              <p>
                Sautec Shrimps, Calamari, Prawns, Cooked in Homemade Tomato
                Sauce, Uriza, Scent Leaf Garnished.
              </p>
              <br />
            </div>
          </div>

          {/* Pasta Container */}
          <div className={styles.topRContainer}>
            <div className={styles.containerTitle}>
              <h4>Riverine Soup (half)</h4>
              <p>
                Periwinkle, prawns, shrimps, fish, slice snails, scent leaf,
                cooked with flavored spices, served with poundo yam.
              </p>
            </div>
            <div>
              <h5>Swallow Options</h5>
              <p>
                <span>(Semo)</span>, <span>(Poundo)</span>, <span>(Amala)</span>
                , <span>(Eba)</span>
              </p>
              <br />

              <h5>Grilled Catfish (Big)</h5>
              <p>Bistro chilli sauce, fried plantain or yam, slaw.</p>
              <br />

              <h5>Grilled Croaker Fish (big)</h5>
              <p>Bistro chilli sauce, fried plantain or yam, slaw.</p>
              <br />

              <h5>Grilled Tilapia Fish (Big)</h5>
              <p>Bistro chilli sauce, fried plantain or yam, slaw.</p>
              <br />

              <h5>Garlic Herbs Snails</h5>
              <p>Peppered snail in garlic, herb flavored.</p>
              <br />

              <h5>Riverine Soup (Full)</h5>
              <p>
                Periwinkle, prawns, shrimps, fish, slice snails, scent leaf,
                cooked with flavored spices, served with poundo yam.
              </p>
              <br />
            </div>
          </div>
        </div>

        {/* Bottom Menu Container */}
        <div className={styles.bottomContainer}>
          {/* Panini Container */}
          <div className={styles.bottomLContainer}>
            <div className={styles.containerTitle}>
              <h4>Owambe (Jollof rice)</h4>
              {/* <p>
                served with mixed greens salad, cup of soup, or roasted
                vegetables
              </p> */}
            </div>
            <div>
              <h5> Plain Basmati Rice</h5>
              {/* <p>
                Grilled eggplant, toamto, basil, mozzarella, balsamic vinegar
                <span>(10)</span>
              </p> */}
              <br />

              <h5>Mashed Asaro</h5>
              {/* <p>
                Turkey breast, avocado, tomato, organic spring mix{" "}
                <span>(8)</span>
              </p> */}
              <br />

              <h5>Lamb Chops</h5>
              <p>
                Grilled Marinated Lamb Chops, With A Side Of Choice, Slav Peri
                Peri Sweet Chill Jam, Parsley.
              </p>
              <br />

              <h5>Watermelon & Cucumber Juice</h5>
              <p>1/2 Pc watermelon/1 cucumber</p>
              <br />

              <h5>Margarita Pizza (Regular)</h5>
              <p>Tomato sauce, cheese and oregano</p>
              <br />
            </div>
          </div>

          {/* Pizza Container */}
          <div className={styles.bottomRContainer}>
            <div className={styles.containerTitle}>
              <h4>Bistro Splash Juice</h4>
              <p>Cucumber, Celery, Apple, mint leaf, Pineapple</p>
            </div>
            <div>
              <h5>Bistro Starter Smoothie</h5>
              <p>Apple, Banana, Sweet Pear, Pineapple & Watermelon</p>
              <br />
              <h5> Catfish Pepper Soup</h5>
              <br />
              <h5>Strawberry Lemonde</h5>
              Strawberry Syrup, Lemon Juice, Sugar Syrups, Sparkling Water
              <br />
              <h5>Pineapple Parfait</h5>
              <p>Pineapple, Apple, Grapes, Berries and Low fat Yoghurt</p>
              <br />
              <h5>Lagos Beet Vibe</h5>
              <p>Beetroot, Yoghurt red apple, banana, Pineapple Smoothie</p>
              <br />
              <h5>Lagos Bistro Special</h5>
              <p>Spinach Banana, Green Apple, Celery Smoothie</p>
              <br />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Menu;
