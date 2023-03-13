import {
  FlexBox,
  Box,
  Deck,
  Heading,
  Image,
  ListItem,
  SlideLayout,
  Stepper,
  Text,
  UnorderedList,
} from "spectacle";
import theme from "./theme/default-theme";

function id(x) {
  return x;
}

function PureFunction() {
  return (
    <>
      <SlideLayout.Center backgroundColor="bg">
        <Heading color="text">Pure Function</Heading>
      </SlideLayout.Center>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">What is Pure Function</Heading>
        <Stepper
          values={[
            <Text color="text">
              pure function 其實就是 function， 只是它多了幾個限制。
            </Text>,

            <>
              <Text color="text">
                pure function 其實就是 function， 只是它多了幾個限制。
              </Text>

              <UnorderedList>
                <ListItem color="text">
                  {/* 國中數學的圖 */}
                  同樣的輸入 就會得到同樣的結果。
                </ListItem>
              </UnorderedList>
            </>,

            <>
              <Text color="text">
                pure function 其實就是 function， 只是它多了幾個限制。
              </Text>

              <UnorderedList>
                <ListItem color="text">
                  {/* 國中數學的圖 */}
                  同樣的輸入 就會得到同樣的結果。
                </ListItem>
                <ListItem color="text">沒有副作用 side effect。</ListItem>
              </UnorderedList>
            </>,
          ]}
        >
          {id}
        </Stepper>
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">What is Pure Function</Heading>

        <Stepper
          values={[
            <FlexBox alignItems="start">
              <Box>
                <Text color="text">PURE</Text>
                <Image src="/increment.png" />
              </Box>
            </FlexBox>,
            <FlexBox alignItems="start">
              <Box>
                <Text color="text">PURE</Text>
                <Image src="/increment.png" />
              </Box>

              <Box>
                <Text color="text">NOT PURE</Text>
                <Image height="60%" src="/increment-mut.png" />
              </Box>
            </FlexBox>,
          ]}
        >
          {id}
        </Stepper>
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">Why Pure Function</Heading>

        <Stepper
          values={[
            <FlexBox>
              <UnorderedList>
                <ListItem color="text">預期</ListItem>
              </UnorderedList>
            </FlexBox>,

            <FlexBox>
              <UnorderedList>
                <ListItem color="text">預期</ListItem>
                <ListItem color="text">測試</ListItem>
              </UnorderedList>
            </FlexBox>,
          ]}
        >
          {id}
        </Stepper>
      </SlideLayout.Full>
    </>
  );
}

function Immutability() {
  return (
    <>
      <SlideLayout.Center backgroundColor="bg">
        <Heading color="text">Immutability</Heading>
      </SlideLayout.Center>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">What is Immutability</Heading>

        <Text color="text">
          資料在傳遞或是計算過程中，不會異動到原本的資料。
        </Text>
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">What is Immutability</Heading>

        <Stepper
          values={[
            <FlexBox alignItems="start">
              <Box>
                <Text color="text">Mutable</Text>
                <Image height={400} src="/mut-login.png" />
              </Box>
            </FlexBox>,
            <FlexBox alignItems="start">
              <Box>
                <Text color="text">Mutable</Text>
                <Image height={400} src="/mut-login.png" />
              </Box>

              <Box>
                <Text color="text">Immutable</Text>
                <Image height={400} src="/immu-login.png" />
              </Box>
            </FlexBox>,
          ]}
        >
          {id}
        </Stepper>
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">Why Immutability</Heading>

        <FlexBox>
          <UnorderedList>
            <ListItem color="text">除錯</ListItem>
          </UnorderedList>
        </FlexBox>
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Image width={1200} src="/mut-example.png" />
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">Issues</Heading>
        <Text color="text">
          我們無法簡單得知 globalSheet 會在哪個環節被異動到
        </Text>
        <Text color="text">我們很難追朔 globalSheet 為什麼被異動</Text>
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">Why Immutability</Heading>

        <FlexBox>
          <UnorderedList>
            <ListItem color="text">並行運算</ListItem>
          </UnorderedList>
        </FlexBox>
      </SlideLayout.Full>
    </>
  );
}

function FirstClassFunction() {
  return (
    <>
      <SlideLayout.Center backgroundColor="bg">
        <Heading color="text">First Class Function</Heading>
      </SlideLayout.Center>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">What is First Class Function</Heading>

        <Text color="text">讓函式可以像是一般的變數一樣，被宣告跟傳遞。</Text>
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">Why First Class Function</Heading>

        <Stepper
          values={[
            <FlexBox alignItems="start">
              <Box>
                <Text color="text">Not Using First Class Function</Text>
                <Image height={400} src="/click-inner-class.png" />
              </Box>
            </FlexBox>,
            <FlexBox alignItems="start">
              <Box>
                <Text color="text">Not Using First Class Function</Text>
                <Image height={400} src="/click-inner-class.png" />
              </Box>

              <Box>
                <Text color="text">Using First Class Function</Text>
                <Image height={400} src="/click.png" />
              </Box>
            </FlexBox>,
          ]}
        >
          {id}
        </Stepper>
      </SlideLayout.Full>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">First Class Function and Pattern</Heading>

        <Text color="text">
          函式編程眾多的設計模式，都是基於這個特性延展出來的
        </Text>

        <UnorderedList>
          <ListItem color="text">Closure</ListItem>
          <ListItem color="text">Higher Order Function</ListItem>
          <ListItem color="text">Curring</ListItem>
          <ListItem color="text">Composition</ListItem>
        </UnorderedList>
      </SlideLayout.Full>
    </>
  );
}

function Story() {
  return (
    <>
      <SlideLayout.Center backgroundColor="bg">
        <Heading color="text">Story</Heading>
      </SlideLayout.Center>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">Alonzo Church and Lambda</Heading>

        <Stepper
          values={[
            <FlexBox>
              <Image
                width={300}
                src="https://upload.wikimedia.org/wikipedia/en/a/a6/Alonzo_Church.jpg"
              />
            </FlexBox>,
            <FlexBox>
              <Image
                width={300}
                src="https://upload.wikimedia.org/wikipedia/en/a/a6/Alonzo_Church.jpg"
              />
              <Image
                width={600}
                src="https://stopa.io/api/image/aHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vOTg0NTc0Lzk2Mzc4MjE3LTc5OWMxYjAwLTExNTgtMTFlYi05N2U5LWY0ZDIxZGE2YmJkOC5wbmc"
              />
            </FlexBox>,
          ]}
        >
          {id}
        </Stepper>
      </SlideLayout.Full>
    </>
  );
}

function Introduction() {
  return (
    <>
      <SlideLayout.Center backgroundColor="bg">
        <Heading color="text">Functional Programming</Heading>
      </SlideLayout.Center>

      <SlideLayout.Center backgroundColor="bg">
        <Heading color="text">思考方式的改變</Heading>
      </SlideLayout.Center>

      <SlideLayout.Center backgroundColor="bg">
        <Heading color="text">
          透過排列組合的方式，把小的函式組裝成大且複雜的應用程式。
        </Heading>
      </SlideLayout.Center>

      <SlideLayout.Full backgroundColor="bg">
        <Heading color="text">Functional Programming</Heading>

        <UnorderedList>
          <ListItem color="text">起源</ListItem>
          <ListItem color="text">核心概念</ListItem>
          <ListItem color="text">如何學習</ListItem>
        </UnorderedList>
      </SlideLayout.Full>
    </>
  );
}

function App() {
  return (
    <Deck theme={theme}>
      <Introduction />
      <Story />
      <PureFunction />
      <Immutability />
      <FirstClassFunction />
    </Deck>
  );
}

export default App;
