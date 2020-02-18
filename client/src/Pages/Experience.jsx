import React, {Component} from 'react';
import './Experience.scss'
import {Link} from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll'

export class Experience extends Component {

  render() {
    return (
      <section id='experience' className='container'>
        <div className='experience'>
          <h3 className='experience__title'>Where I've Worked</h3>
          <div className='experience__content'>
            <div className='experience__company_list'>
              <ScrollContainer
                className="scroll-container experience__list"
                vertical={true}
                hideScrollbars={false}>

                <div className='experience__items'>
                  <div className='experience__card experience__card--active'>
                    <div className='experience__card-header experience__card-header--active'>
                      <h3 className='experience__company'>
                        DecodeTokyo</h3>
                      <h4 className='experience__duration'>Jan 2020 - Present</h4>
                    </div>
                    <div className='experience__card-body'>
                      <h2 className='experience__position'>Front End Web Developer</h2>
                      <p className='experience__position-desc'>Front End Developer duties include
                        determining the structure and design of web pages, striking a balance between
                        functional and aesthetic design and ensuring web design is optimized for
                        smartphones.</p>
                    </div>
                  </div>
                </div>

                <div className='experience__items'>
                  <div className='experience__card'>
                    <div className='experience__card-header'>
                      <h3 className='experience__company'>
                        Key Discovery Consultaion Inc.</h3>
                      <h4 className='experience__duration'>Aug 2019 - Nov 2019</h4>
                    </div>
                    <div className='experience__card-body'>
                      <h2 className='experience__position'>Web Graphic Designer</h2>
                      <p className='experience__position-desc'>Web graphic designers decide how
                        websites look, making choices about layout, fonts, and images to create usable
                        and aesthetically pleasing websites.</p>
                    </div>
                  </div>
                </div>

                <div className='experience__items'>
                  <div className='experience__card'>
                    <div className='experience__card-header'>
                      <h3 className='experience__company'>
                        Panasonic Mfg. Philippines Corp.</h3>
                      <h4 className='experience__duration'>Apr 2018 - Mar 2018</h4>
                    </div>
                    <div className='experience__card-body'>
                      <h2 className='experience__position'>Production Engineer (Intern)</h2>
                      <p className='experience__position-desc'>Production engineers work in the
                        sphere of manufacturing, overseeing the production of goods in many industries
                        at factories or plants.
                      </p>
                    </div>
                  </div>
                </div>

              </ScrollContainer>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
