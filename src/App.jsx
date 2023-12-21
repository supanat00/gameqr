import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
import './app.css'

export default function App() {
  const [selected, setSelected] = React.useState("login");

  return (

      <Card className="max-w-full w-[340px] h-[400px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={setSelected}
          >
            {/* Single Tab */}          
            <Tab key="single" title="Single">
              {/* Card One */}
              <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/aJauAJV.png" className="icon" />
                  <h3>iron man</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>
            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>

            {/* Card Two */}
            <div className="flip-card">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>
            
            </Tab>

            {/* Team Tab */}
            <Tab key="team" title="Team">
            {/* Team One */}
            <div className="flip-card-team">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/aJauAJV.png" className="icon" />
                  <h3>iron man</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>
            {/* Team Two */}
            <div className="flip-card-team">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                  <h3>thor</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>
            {/* Team Three */}
            <div className="flip-card-team">
              <div className="flip-card-front">
                <div className="inner">
                  <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                  <h3>avengers</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
                    corrupti itaque dolore!
                  </p>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="inner">
                  <img src=" https://i.imgur.com/wROMxVv.png" className="icon" />
                  <h3>spider-man</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                    voluptatum eius quam debitis, sit amet sunt neque ipsum?
                  </p>
                </div>
              </div>
            </div>              

            </Tab>

          </Tabs>
        </CardBody>
      </Card>

  );
}
