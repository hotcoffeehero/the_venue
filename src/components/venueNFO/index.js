import React from 'react'
import Zoom from 'react-reveal/Zoom'

import icon_calendar from '../../resources/images/icons/calendar.png'
import icon_location from '../../resources/images/icons/location.png'

const VenueNFO = () => {
    return (
        <div className='bck_black'>
            <div className='center_wrapper'>
                <div className='vn_wrapper'>

                    {/* This is the box where the actual stuff is.  */}
                    <Zoom duration={500}>
                        <div className='vn_item'>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_red'></div>
                                    <div
                                        className='vn_icon'
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    ></div>
                                    <div className='vn_title'>
                                        Event Date & Time
                                        </div>
                                    <div className='vn_desc'>
                                        New Year's Eve @ 10pm
                                        Los Angeles, California
                                        <br/>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={500} delay={500}>    
                        <div className='vn_item'>
                            <div className='vn_outer'>
                                <div className='vn_inner'>
                                    <div className='vn_icon_square bck_yellow'></div>
                                    <div
                                        className='vn_icon'
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></div>
                                    <div className='vn_title'>
                                        Event Location
                                            </div>
                                    <div className='vn_desc'>
                                        8852 Sunset Blvd
                                        Los Angeles, CA
                                        90096
                                        <br />
                                            </div>

                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default VenueNFO;