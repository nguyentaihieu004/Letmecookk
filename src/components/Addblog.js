import React, { useState } from 'react';
import '../css/Addblog.css';

export default function Addblog() {
    const [formData, setFormData] = useState({
        type_food: '',
        name_food: '',
        time_cook: '',
        image_url: '',
        rating: '',
        main_ingredients: '',
        nguyenlieu: '',
        huongdan: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://sql211.infinityfree.com:3000/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className='addblog-body'>
            <div className="addblog-container">
                <h1>Đóng góp món ăn của bạn</h1>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="type_food"
                                placeholder="Type-food"
                                value={formData.type_food}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="name_food"
                                placeholder="Tên món ăn"
                                value={formData.name_food}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="time_cook"
                                placeholder="Thời gian nấu"
                                value={formData.time_cook}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="image_url"
                                placeholder="Image-url"
                                value={formData.image_url}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="rating"
                                placeholder="Rating"
                                value={formData.rating}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="main_ingredients"
                                placeholder="Nguyên liệu chính"
                                value={formData.main_ingredients}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="nguyenlieu"
                                placeholder="Nguyên liệu"
                                value={formData.nguyenlieu}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-75">
                            <input
                                type="text"
                                name="huongdan"
                                placeholder="Hướng dẫn"
                                value={formData.huongdan}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
}
