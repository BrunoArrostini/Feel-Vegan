import React from 'react'
import { InfoContainer, TopWrapper, BottomWrapper, PicContainer, TextContainer, Text } from './styles/info.styled'
import {Title} from "./styles/home.styled"
import veg1 from "../images/pic1.webp"

function Info() {
  return (
    <InfoContainer>
        <TopWrapper>
            <TextContainer>
                <Title style={{textAlign:"center"}}>Benefits of vegetarian diet</Title>
                <Text>
                  Maybe. Compared with meat eaters, vegetarians tend to consume less saturated fat and cholesterol and more vitamins C and E, dietary fiber, folic acid, potassium, magnesium, and phytochemicals (plant chemicals), such as carotenoids and flavonoids. 
                  As a result, they're likely to have lower total and LDL (bad) cholesterol, lower blood pressure, and lower body mass index (BMI), all of which are associated with longevity and a reduced risk for many chronic diseases.
                  But there still aren't enough data to say exactly how a vegetarian diet influences long-term health. 
                  It's difficult to tease out the influence of vegetarianism from other practices that vegetarians are more likely to follow, such as not smoking, not drinking excessively, and getting adequate exercise.
                  But here's what some of the research has shown so far: <br/>
                  <br/>
                  <strong>Heart disease.</strong> There's some evidence that vegetarians have a lower risk for cardiac events (such as a heart attack) and death from cardiac causes. In one of the largest studies — a combined analysis of data from five prospective studies involving more than 76,000 participants published several years ago — vegetarians were, on average, 25% less likely to die of heart disease. This result confirmed earlier findings from studies comparing vegetarian and nonvegetarian Seventh-day Adventists (members of this religious group avoid caffeine and don't drink or smoke; about 40% are vegetarians). In another study involving 65,000 people in the Oxford cohort of the European Prospective Investigation into Cancer and Nutrition (EPIC-Oxford), researchers found a 19% lower risk of death from heart disease among vegetarians. However, there were few deaths in either group, so the observed differences may have been due to chance.
                  <br/>
                  <br/>
                  For heart protection, it's best to choose high-fiber whole grains and legumes, which are digested slowly and have a low glycemic index — that is, they help keep blood sugar levels steady. Soluble fiber also helps reduce cholesterol levels. Refined carbohydrates and starches like potatoes, white rice, and white-flour products cause a rapid rise in blood sugar, which increases the risk of heart attack and diabetes (a risk factor for heart disease).
                  <br/>
                  <br/>  
                  <strong>Nuts are also heart-protective.</strong> They have a low glycemic index and contain many antioxidants, vegetable protein, fiber, minerals, and healthy fatty acids. The downside: nuts pack a lot of calories, so restrict your daily intake to a small handful (about an ounce). The upside: because of their fat content, even a small amount of nuts can satisfy the appetite.
                  <br/>
                  <br/>  
                  Walnuts, in particular, are a rich source of omega-3 fatty acids, which have many health benefits. Even so, fish are the best source of omega-3s, and it's not clear whether plant-derived omega-3s are an adequate substitute for fish in the diet. One study suggests that omega-3s from walnuts and fish both work to lower heart disease risk, but by different routes. Walnut omega-3s (alpha-linolenic acid, or ALA) help reduce total cholesterol and LDL (bad) cholesterol, while omega-3s from fish (eicosapentaenoic acid, or EPA, and docosahexaenoic acid, or DHA) lower triglycerides and raise HDL (good) cholesterol levels.
                  <br/>
                  <br/>
                  <strong>Cancer.</strong> Hundreds of studies suggest that eating lots of fruits and vegetables can reduce the risk of developing certain cancers, and there's evidence that vegetarians have a lower incidence of cancer than nonvegetarians do. But the differences aren't large. A vegetarian diet can make it easier to get the recommended minimum of five daily servings of fruits and vegetables, but a purely vegetarian diet is not necessarily better than a plant-based diet that also includes fish or poultry. For example, in a pooled analysis of data from the Oxford Vegetarian Study and EPIC-Oxford, fish-eaters had a lower risk of certain cancers than vegetarians
                </Text>
            </TextContainer>
            <PicContainer>
                <img src={veg1} alt=""></img>
            </PicContainer>
        </TopWrapper>
        <BottomWrapper>
            <TextContainer>
                <Title style={{textAlign:"center"}}>Riks of vegetarian diet</Title>
                <Text>
                Concerns about vegetarian diets have focused mainly on the following nutrients:<br/> 
                <br/>
                <strong>Protein.</strong> Research shows that lacto-ovo vegetarians generally get the recommended daily amount of protein, which is easily obtained from dairy products and eggs. (Women need about 0.4 grams of protein per pound of body weight per day. Because the protein in vegetables is somewhat different from animal protein, vegans may need 0.45 grams of protein per pound of body weight per day.) There are many plant sources that can help vegans meet their protein needs, including peas, beans, lentils, chickpeas, seeds, nuts, soy products, and whole grains (for example, wheat, oats, barley, and brown rice). Vegetarians used to be told that they had to combine "complementary" plant proteins (rice with beans, for example) at every meal to get all the amino acids contained in meat protein. Now, health experts say that such rigid planning is unnecessary. According to the American Dietetic Association, eating a wide variety of protein sources every day is sufficient.
                <br/>
                <br/>
                <strong>Vitamin B12.</strong> Vitamin B12 is found only in animal products, but those products include dairy foods and eggs, so most vegetarians get all they need. If you avoid animal products altogether, you should eat foods fortified with vitamin B12 (certain soy and rice beverages and breakfast cereals) or take a vitamin B12 supplement to avoid a deficiency, which can cause neurological problems and pernicious anemia.
                <br/>
                <br/>
                <strong>Iron.</strong> Studies show that in Western countries, vegetarians tend to get the same amount of iron as meat eaters. But the iron in meat (especially red meat) is more readily absorbed than the kind found in plant foods, known as non-heme iron. The absorption of non-heme iron is enhanced by vitamin C and other acids found in fruits and vegetables, but it may be inhibited by the phytic acid in whole grains, beans, lentils, seeds, and nuts.
                <br/>
                <br/>
                <strong>Zinc.</strong> Phytic acid in whole grains, seeds, beans, and legumes also reduces zinc absorption, but vegetarians in Western countries do not appear to be zinc-deficient.
                <br/>
                <br/>
                Omega-3 fatty acids. Diets that include no fish or eggs are low in EPA and DHA. Our bodies can convert ALA in plant foods to EPA and DHA, but not very efficiently. Vegans can get DHA from algae supplements, which increase blood levels of DHA as well as EPA (by a process called retroversion). DHA-fortified breakfast bars and soy milk are also available. Official dietary guidelines recommend 1.10 grams per day of ALA for women, but vegetarians who consume little or no EPA and DHA should probably get more than that. Good ALA sources include flaxseed, walnuts, canola oil, and soy.
                </Text>
            </TextContainer>
            <PicContainer>
                <img src={veg1} alt=""></img>
            </PicContainer>
        </BottomWrapper>
    </InfoContainer>
  )
}

export default Info