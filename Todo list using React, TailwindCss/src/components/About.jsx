import React from 'react'

const About = () => {
    return (
        <>
            <div className="flex justify-center items-center flex-col mt-10 text-center px-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#2c5364] mt-10">About myTodo</h1>

                <p className="max-w-2xl text-gray-700 md:text-lg mb-4">
                    <b>myTodo</b> is a simple, fast, and user-friendly task management app built using <b>React</b>.
                    It helps you organize your daily tasks, stay productive, and keep track of what needs to be done — all in one clean interface.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2 text-[#2c5364]">Features</h2>
                <ul className="text-gray-700 text-center max-w-lg md:text-lg list-inside mb-6">
                    <li>Add, edit, and delete tasks easily</li>
                    <li>Mark completed tasks and hide them</li>
                    <li>Data saved in your browser using localStorage</li>
                    <li>Clean and responsive design with Tailwind CSS</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-5 mb-2 text-[#2c5364]">Why I built this</h2>
                <p className="max-w-2xl text-gray-700 md:text-lg  mb-6">
                    I created this app to practice React concepts such as components, hooks, routing, and state management.
                    It also reflects my interest in building practical, real-world projects that make daily life easier.
                </p>

                <h2 className="text-2xl font-semibold mt-5 mb-2 text-[#2c5364]">About the Developer</h2>
                <p className="max-w-2xl text-gray-700 md:text-lg mb-10">
                    Hi, I’m <b>Sunny Mehta</b>, a student and web developer passionate about learning modern web technologies
                    and building useful projects. myTodo is one of my beginner-friendly projects in my React learning journey.
                </p>


            </div>
        </>
    )
}

export default About