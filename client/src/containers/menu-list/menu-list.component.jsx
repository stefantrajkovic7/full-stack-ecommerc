import React from 'react';
import { MockList } from './mock-list';
import MenuItem from '../../components/menu-item';

import './menu-list.component.scss';

class MenuList extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: MockList
        }
    }
   
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={ id } {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default MenuList;