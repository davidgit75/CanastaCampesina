import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import Divider from 'react-md/lib/Dividers'
import Subheader from 'react-md/lib/Subheaders'
import Avatar from 'react-md/lib/Avatars'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import CardText from 'react-md/lib/Cards/CardText'
import Media, { MediaOverlay } from 'react-md/lib/Media'
import Button from 'react-md/lib/Buttons'
import { getSalers as getSalersAction } from '../../api/salers'

class TableOrdersContainer extends Component {
  componentDidMount() {
    this.props.getSalers()
  }

  getProducts(saler) {
    return saler.products.map((product, i) => (
      <div key={i} className='md-grid'>
        <div className='md-cell md-cell--6'>
          <List className="md-paper">
            <Subheader primary primaryText={product.name} />
            <ListItem
              primaryText='Unidad'
              secondaryText={product.unitBase}
            />
          </List>
        </div>
      </div>
    ))
  }

  getSalers() {
    return this.props.salers.map((saler, i) => (
      <div key={i} className='md-cell md-cell--4'>
        <Card key={i} className="md-block-centered">
          <Media>
            <img src={'http://www.clapsoficial.com.ve/wp-content/uploads/2017/04/lucha.jpg'} role='presentation' />
            <MediaOverlay>
              <CardTitle title={saler.name} subtitle={saler.products.length ? `Hay ${saler.products.length} producto(s) disponibles` : 'Sin productos disponibles'}>
                <Button className="md-cell--right" icon>shopping_cart</Button>
              </CardTitle>
            </MediaOverlay>
          </Media>

          <CardText>
            {
              saler.products.length ? this.getProducts(saler) : 'Sin productos disponibles' 
            }
          </CardText>
        </Card>
      </div>
    ))
  }
  
  render() {
    return (
      <div className='md-grid'>
        {this.getSalers()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  salers: state.salers
})

const mapDispatchToProps = dispatch => ({
  getSalers() {
    return dispatch(getSalersAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TableOrdersContainer)
