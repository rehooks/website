import { ellipsis } from 'polished'

import Tabs from '../tabs'

export default ({ data, children }) => (
  <div className='browser'>
    <style jsx>{`
      .browser {
        display: flex;
        flex-direction: column;
        color: black;
        background: #FFFFFF;
        box-shadow: 0 14px 50px 0 rgba(0,0,0,0.38), 0 2px 10px 0 rgba(0,0,0,0.48);
        border-radius: 7px;
        width: 100%;
        height: 352px;
        overflow: hidden;
      }
      .header {
        display: flex;
        height: 2rem;
        line-height: 2rem;
        text-align: left;
        position: relative;
        box-shadow: 0 0 0 1px #ccc;
        background-image: linear-gradient(-180deg, #F5F5F5 2%, #E8E8E8 99%);
      }
      .button-group {
        display: inline-block;
        margin: 0 1rem;
      }
      .button {
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.2);
      }
      .button:not(:last-of-type) {
        margin-right: 5px;
      }
      .title {
        position: absolute;
        max-width: calc(100% - 80px);
        width: 200px;
        margin: auto;
        left: 0;
        right: 0;
        text-align: center;
        background: rgba(255, 255, 255, 0.65);
        height: 1.5rem;
        top: .25rem;
        line-height: 1.5rem;
        border-radius: 5px;
        padding: 0 .5rem;
        color: #8c8c8c;
      }
      .content {
        flex: 1;
        overflow-y: hidden;
        text-align: left;
      }
    `}</style>
    <Tabs data={data.browserTabs}>{
      (onSelect, selectedTab, selectedIndex) => <>
        <div className='header' title={selectedTab}>
          <div className='button-group'>
            <span className='button' />
            <span className='button' />
            <span className='button' />
          </div>
          <div className='title f6' style={ellipsis()}>
            {selectedTab}
          </div>
        </div>
        <div className='content'>
          {(() => {
            let SelectedTab = data.browserMapping[selectedTab]
            return <SelectedTab onSelect={onSelect}/>
          })()}
        </div>
      </>
    }</Tabs>
  </div>
)