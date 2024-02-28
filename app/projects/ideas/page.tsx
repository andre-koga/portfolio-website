import clsx from "clsx";

const ideas = [
  "Personal Website - Create a simple portfolio website using HTML, CSS, and maybe some JavaScript for interactivity.",
  "To-Do List App - Build a basic to-do list application using HTML, CSS, and JavaScript.",
  "Weather App - Develop an app that fetches and displays weather information based on the user's location using a weather API and JavaScript.",
  "Calculator - Create a basic calculator application using HTML, CSS, and JavaScript.",
  "Blogging Platform - Build a simple blogging platform using a web framework like Flask (Python) or Express.js (Node.js).",
  "Expense Tracker - Develop an application to track expenses and generate reports using a database like SQLite and a web framework.",
  "URL Shortener - Create a URL shortening service using a backend language like Python (Flask/Django) or Node.js.",
  "Chat Application - Build a real-time chat application using WebSockets and a JavaScript framework like Socket.IO.",
  "Recipe Finder - Develop a web application that allows users to search for recipes based on ingredients using an API like Edamam.",
  "Portfolio Optimization Tool - Create a tool that suggests optimal investment portfolios based on user input and financial data using Python and libraries like Pandas.",
  "Password Manager - Build a password manager application that securely stores and manages passwords using encryption techniques.",
  "Image Gallery - Develop a simple image gallery website using a frontend framework like React or Vue.js.",
  "Music Player - Create a basic music player application using HTML, CSS, and JavaScript.",
  "Blog Analytics Dashboard - Build a dashboard that provides analytics on blog traffic, popular posts, etc., using a visualization library like D3.js.",
  "Personal Finance Tracker - Develop an application to track personal finances, expenses, and income using a backend database and a frontend framework.",
  "Virtual Private Network (VPN) - Create a basic VPN application using networking concepts and encryption techniques.",
  "Markdown Editor - Build a web-based Markdown editor with live preview using a frontend framework like React.",
  "Code Snippet Manager - Develop a tool to organize and manage code snippets with syntax highlighting and categorization.",
  "Language Flashcards - Create a web application to help users learn new languages through flashcards with interactive quizzes.",
  "Job Search Aggregator - Build a web scraper that aggregates job listings from multiple websites and presents them in a unified interface.",
  "Cryptocurrency Tracker - Develop an application that tracks cryptocurrency prices and provides real-time updates using an API like CoinGecko.",
  "Personal CRM - Build a customer relationship management (CRM) system tailored for personal use to manage contacts, interactions, and tasks.",
  "Social Media Scheduler - Create a tool to schedule and manage social media posts across different platforms using APIs.",
  "E-book Reader - Develop a web-based e-book reader with features like bookmarking, highlighting, and annotations.",
  "Recommendation System - Build a recommendation system that suggests movies, books, or music based on user preferences and behavior.",
  "Neural Network From Scratch - Implement a simple neural network framework using Python and NumPy.",
  "Data Visualization Dashboard - Create a dashboard that visualizes data from various sources using a frontend framework and visualization libraries.",
  "Stock Market Prediction - Develop a machine learning model to predict stock prices based on historical data using Python and libraries like scikit-learn.",
  "Personal Fitness Tracker - Build an application to track fitness goals, workouts, and progress over time.",
  "Podcast Aggregator - Create a tool to aggregate and organize podcast episodes from different sources into a single interface.",
  "Text-based RPG Game - Develop a text-based role-playing game (RPG) using Python or another programming language.",
  "Music Recommendation Engine - Build a recommendation engine that suggests music based on user preferences and listening history.",
  "OCR (Optical Character Recognition) Tool - Develop a tool that can extract text from images using OCR techniques and machine learning.",
  "IoT Weather Station - Build a weather station using IoT devices like Raspberry Pi and sensors to collect and display weather data.",
  "Natural Language Processing (NLP) Tool - Create a tool to analyze and extract insights from text data using NLP techniques and libraries like NLTK or spaCy.",
  "Content Aggregator - Develop a content aggregator that gathers articles, news, and blog posts from various sources and presents them in one place.",
  "Sentiment Analysis Tool - Build a tool to analyze the sentiment of text data (e.g., social media posts, product reviews) using machine learning.",
  "Personal Budget Planner - Create an application to help users plan and manage their budgets, expenses, and savings goals.",
  "Knowledge Base System - Develop a system for creating, organizing, and searching a knowledge base of articles, FAQs, and documentation.",
  "Employee Attendance System - Build an application to track employee attendance, time-in/time-out, and generate reports.",
  "Online Marketplace - Create a basic online marketplace platform where users can buy and sell goods or services.",
  "Recommendation System for Online Shopping - Develop a recommendation system that suggests products to users based on their browsing and purchase history.",
  "Neural Style Transfer - Implement a neural network model that applies the style of one image to another image.",
  "Automated Email Marketing Tool - Build a tool to automate email marketing campaigns, including scheduling, segmentation, and analytics.",
  "Vehicle Routing Optimization - Develop an algorithm to optimize vehicle routing and scheduling for delivery or transportation services.",
  "Code Review Tool - Create a tool for conducting and managing code reviews within development teams.",
  "Document Management System - Develop a system for organizing, storing, and managing documents within an organization.",
  "Personalized News Feed - Build a news feed application that delivers personalized content to users based on their interests and preferences.",
  "Online Learning Platform - Create a platform for hosting and delivering online courses, tutorials, and educational content.",
  "Blockchain-Based Voting System - Develop a voting system using blockchain technology for secure and transparent voting.",
  "Automated Trading Bot - Build a bot that automatically executes trades on a stock market or cryptocurrency exchange based on predefined strategies.",
  "AI-powered Virtual Assistant - Develop a virtual assistant with natural language understanding and generation capabilities, similar to Siri or Alexa.",
];

const done = 1;

export default function Page() {
  return (
    <main>
      <h2 className="m-2 text-center text-xl uppercase">Ideas:</h2>
      <ul className="prose prose-invert mx-auto grid rounded border border-mid p-4 text-sm">
        {ideas.map((idea, index) => (
          <li className={clsx({ "text-lighty": index < done })} key={index}>
            {index < done ? "[DONE!] " : ""}Week {index + 1}: {idea}
          </li>
        ))}
      </ul>
    </main>
  );
}
