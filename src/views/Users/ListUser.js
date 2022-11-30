import React from "react";
import axios from "axios";

class ListUser extends React.Component {

    state = {
        listUser: []
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                console.log(res.data.data)
                this.setState({
                    listUser: res && res.data && res.data.data ? res.data.data : []
                })
            })
    }

    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                {
                    listUser && listUser.length > 0 &&
                    listUser.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1}. {item.first_name} {item.last_name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default ListUser;