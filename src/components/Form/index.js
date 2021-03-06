import React from 'react';

const Form = () => {
    return (
        <div className="w-full">
            <div className=" bg-top1 h-96"></div>
            <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                    <p className="text-3xl font-bold leading-7 text-center">Оставьте заявку</p>
                    <form action="" method="post">
                        <div className="md:flex items-center mt-12">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none">Имя</label>
                                <input type="text"
                                       className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none">Телефон</label>
                                <input type="email"
                                       className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none">Цель кредита</label>
                                <input type="text"
                                       className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
                            </div>

                        </div>

                        <div className="flex items-center justify-center w-full">
                            <button
                                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;