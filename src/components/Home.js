import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.js';
import Card from '../components/Card.js';
import '../components/Home.css';

const Home = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="home-container">
            {user ? (
                <div>
                    <h1>Welcome, {user.username}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <h1>Welcome to Premia Bakery</h1>
            )}
            
            <div className="card-container">
                <Card
                    image="https://wallpaper.forfun.com/fetch/e8/e81ae7700743a20bc3e085a6412fec9a.jpeg"
                    title="Donuts"
                    description="Donuts are a beloved sweet treat enjoyed around the world for their deliciously indulgent flavor and fluffy texture. Typically made from a dough that is fried until golden brown, donuts come in various shapes and sizes, often featuring a hole in the center, although some are filled with delightful creams, jams, or custards. Coated with powdered sugar, glazed with a sweet icing, or topped with colorful sprinkles, donuts offer a versatile canvas for creativity and flavor experimentation. Whether enjoyed with a morning coffee or as an afternoon snack, donuts are celebrated for their satisfying sweetness and comfort-food appeal."
                    link="https://example.com/card1"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/f8/f808948c5287ee39629cd66df9548689.jpeg"
                    title="Strawberry Cake"
                    description="
Strawberry cake is a delectable dessert that combines the fresh, fruity essence of strawberries with a moist and fluffy cake base. Often made with real strawberries or strawberry puree, this cake boasts a vibrant pink color and a sweet, tangy flavor that perfectly captures the essence of the fruit. It is typically layered and frosted with a creamy strawberry or vanilla buttercream, and sometimes adorned with additional fresh strawberries for a burst of natural sweetness. Whether served as a special treat for celebrations or a delightful end to a meal, strawberry cake offers a refreshing and indulgent experience that highlights the joy of one of summer's most cherished fruits."
                    link="https://example.com/card2"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/c8/c837ea9ed7a7f91403949d497c16bd62.jpeg"
                    title="Strawberry Biscuits"
                    description="
Strawberry biscuits are a delightful twist on traditional biscuits, blending the flaky, buttery texture of classic biscuits with the sweet, tangy flavor of fresh strawberries. These biscuits are made by incorporating chunks or pieces of ripe strawberries into the dough, which adds a burst of fruity sweetness in every bite. Often served warm, they have a light, tender crumb and a golden-brown exterior, sometimes topped with a sprinkle of sugar for extra crunch. Ideal for breakfast, brunch, or a charming afternoon tea, strawberry biscuits provide a delicious and fragrant treat that highlights the vibrant flavor of strawberries while maintaining the comforting appeal of homemade biscuits."
                    link="https://example.com/card3"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/11/112c4645df70626ba47bad73d12d4335.jpeg"
                    title="Cherry Pie Cake"
                    description="Donuts are a beloved sweet treat enjoyed around the world for their deliciously indulgent flavor and fluffy texture. Typically made from a dough that is fried until golden brown, donuts come in various shapes and sizes, often featuring a hole in the center, although some are filled with delightful creams, jams, or custards. Coated with powdered sugar, glazed with a sweet icing, or topped with colorful sprinkles, donuts offer a versatile canvas for creativity and flavor experimentation. Whether enjoyed with a morning coffee or as an afternoon snack, donuts are celebrated for their satisfying sweetness and comfort-food appeal."
                    link="https://example.com/card1"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/c5/c570cc3a01899678b066c339109e70ff.jpeg"
                    title="Strawberry Cake"
                    description="
Strawberry cake is a delectable dessert that combines the fresh, fruity essence of strawberries with a moist and fluffy cake base. Often made with real strawberries or strawberry puree, this cake boasts a vibrant pink color and a sweet, tangy flavor that perfectly captures the essence of the fruit. It is typically layered and frosted with a creamy strawberry or vanilla buttercream, and sometimes adorned with additional fresh strawberries for a burst of natural sweetness. Whether served as a special treat for celebrations or a delightful end to a meal, strawberry cake offers a refreshing and indulgent experience that highlights the joy of one of summer's most cherished fruits."
                    link="https://example.com/card2"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/c8/c837ea9ed7a7f91403949d497c16bd62.jpeg"
                    title="Strawberry Biscuits"
                    description="
Strawberry biscuits are a delightful twist on traditional biscuits, blending the flaky, buttery texture of classic biscuits with the sweet, tangy flavor of fresh strawberries. These biscuits are made by incorporating chunks or pieces of ripe strawberries into the dough, which adds a burst of fruity sweetness in every bite. Often served warm, they have a light, tender crumb and a golden-brown exterior, sometimes topped with a sprinkle of sugar for extra crunch. Ideal for breakfast, brunch, or a charming afternoon tea, strawberry biscuits provide a delicious and fragrant treat that highlights the vibrant flavor of strawberries while maintaining the comforting appeal of homemade biscuits."
                    link="https://example.com/card3"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/e8/e81ae7700743a20bc3e085a6412fec9a.jpeg"
                    title="Donuts"
                    description="Donuts are a beloved sweet treat enjoyed around the world for their deliciously indulgent flavor and fluffy texture. Typically made from a dough that is fried until golden brown, donuts come in various shapes and sizes, often featuring a hole in the center, although some are filled with delightful creams, jams, or custards. Coated with powdered sugar, glazed with a sweet icing, or topped with colorful sprinkles, donuts offer a versatile canvas for creativity and flavor experimentation. Whether enjoyed with a morning coffee or as an afternoon snack, donuts are celebrated for their satisfying sweetness and comfort-food appeal."
                    link="https://example.com/card1"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/f8/f808948c5287ee39629cd66df9548689.jpeg"
                    title="Strawberry Cake"
                    description="
Strawberry cake is a delectable dessert that combines the fresh, fruity essence of strawberries with a moist and fluffy cake base. Often made with real strawberries or strawberry puree, this cake boasts a vibrant pink color and a sweet, tangy flavor that perfectly captures the essence of the fruit. It is typically layered and frosted with a creamy strawberry or vanilla buttercream, and sometimes adorned with additional fresh strawberries for a burst of natural sweetness. Whether served as a special treat for celebrations or a delightful end to a meal, strawberry cake offers a refreshing and indulgent experience that highlights the joy of one of summer's most cherished fruits."
                    link="https://example.com/card2"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/c8/c837ea9ed7a7f91403949d497c16bd62.jpeg"
                    title="Strawberry Biscuits"
                    description="
Strawberry biscuits are a delightful twist on traditional biscuits, blending the flaky, buttery texture of classic biscuits with the sweet, tangy flavor of fresh strawberries. These biscuits are made by incorporating chunks or pieces of ripe strawberries into the dough, which adds a burst of fruity sweetness in every bite. Often served warm, they have a light, tender crumb and a golden-brown exterior, sometimes topped with a sprinkle of sugar for extra crunch. Ideal for breakfast, brunch, or a charming afternoon tea, strawberry biscuits provide a delicious and fragrant treat that highlights the vibrant flavor of strawberries while maintaining the comforting appeal of homemade biscuits."
                    link="https://example.com/card3"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/e8/e81ae7700743a20bc3e085a6412fec9a.jpeg"
                    title="Donuts"
                    description="Donuts are a beloved sweet treat enjoyed around the world for their deliciously indulgent flavor and fluffy texture. Typically made from a dough that is fried until golden brown, donuts come in various shapes and sizes, often featuring a hole in the center, although some are filled with delightful creams, jams, or custards. Coated with powdered sugar, glazed with a sweet icing, or topped with colorful sprinkles, donuts offer a versatile canvas for creativity and flavor experimentation. Whether enjoyed with a morning coffee or as an afternoon snack, donuts are celebrated for their satisfying sweetness and comfort-food appeal."
                    link="https://example.com/card1"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/f8/f808948c5287ee39629cd66df9548689.jpeg"
                    title="Strawberry Cake"
                    description="
Strawberry cake is a delectable dessert that combines the fresh, fruity essence of strawberries with a moist and fluffy cake base. Often made with real strawberries or strawberry puree, this cake boasts a vibrant pink color and a sweet, tangy flavor that perfectly captures the essence of the fruit. It is typically layered and frosted with a creamy strawberry or vanilla buttercream, and sometimes adorned with additional fresh strawberries for a burst of natural sweetness. Whether served as a special treat for celebrations or a delightful end to a meal, strawberry cake offers a refreshing and indulgent experience that highlights the joy of one of summer's most cherished fruits."
                    link="https://example.com/card2"
                />
                <Card
                    image="https://wallpaper.forfun.com/fetch/c8/c837ea9ed7a7f91403949d497c16bd62.jpeg"
                    title="Strawberry Biscuits"
                    description="
Strawberry biscuits are a delightful twist on traditional biscuits, blending the flaky, buttery texture of classic biscuits with the sweet, tangy flavor of fresh strawberries. These biscuits are made by incorporating chunks or pieces of ripe strawberries into the dough, which adds a burst of fruity sweetness in every bite. Often served warm, they have a light, tender crumb and a golden-brown exterior, sometimes topped with a sprinkle of sugar for extra crunch. Ideal for breakfast, brunch, or a charming afternoon tea, strawberry biscuits provide a delicious and fragrant treat that highlights the vibrant flavor of strawberries while maintaining the comforting appeal of homemade biscuits."
                    link="https://example.com/card3"
                />
            </div>
        </div>
    );
};

export default Home;


