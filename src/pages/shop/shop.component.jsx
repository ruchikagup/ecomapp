import React from 'react';

import CollectionPreview from '../../compoents/collection-preview/collection-preview.component'
import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component {
    constructor(props){
        super(props);
         this.state = {
             collection: SHOP_DATA
         }
        
    }
    render () {
        const collections = this.state.collection;
        return(
            <div>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key ={id} {...otherCollectionProps}/>
                ))
            }
            </div>
        )
    }
        
}
export default ShopPage;