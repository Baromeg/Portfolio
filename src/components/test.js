<SwipeableViews
  // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  index={value}
  animateHeight
  onChangeIndex={handleChangeIndex}
>
  {/* <Container> */}

  <div value={value}
    index={0}
  // dir={theme.direction}
  >
    <Home></Home>
  </div>
  <div value={value}
    index={1}
  // dir={theme.direction}
  >
    <About></About>
  </div>
  <div value={value}
    index={2}
  // dir={theme.direction}
  >
    <Portfolio></Portfolio>
  </div>
  <div value={value}
    index={3}
  // dir={theme.direction}
  >
    <Contact></Contact>
  </div>
  {/* </Container> */}
  {/* <ScrollTop {...props}>
            <Fab color="secondary" size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop> */}
</SwipeableViews>