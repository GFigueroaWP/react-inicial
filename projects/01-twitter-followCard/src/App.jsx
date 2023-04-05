import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        userName: 'Kuroo_Okamii',
        name: 'Guido Figueroa Zapata',
        isFollowing: true,
    },
    {
        userName: 'linusgsebastian',
        name: 'Linus LinusMediaGroup',
        isFollowing: false,
    },
    {
        userName: 'BillGates',
        name: 'Bill Gates',
        isFollowing: true,
    }
]

export function App() {
    const format = (userName) => `@${userName}`;

    return(
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user;
                    return(
                        <TwitterFollowCard 
                            key = {userName}
                            formatUserName = {format}
                            userName = {userName} 
                            name = {name}
                            isFollowing = {isFollowing}
                        />
                    );
                })
            }
        </section>
    );
}