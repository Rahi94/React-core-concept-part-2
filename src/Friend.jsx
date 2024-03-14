export default function Friend({friend}){
    console.log(friend)
    const {firstname, email, website} = friend;
    return(
        <div className="box">
            <h4>Name:{firstname}</h4>
            <p>Email: {email}</p>
            <p>Website link: {website}</p>
        </div>
    )
}