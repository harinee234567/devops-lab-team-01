import React, { useEffect, useState } from "react";
import { Calendar, User, MapPin } from "lucide-react";
import { usePapaParse } from "react-papaparse";

export default function ExaminationInformation() {
  const [timetable, setTimetable] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { readRemoteFile } = usePapaParse();

  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSQAg28jUwaZVqWROPz-8c4cG2U0qZBpTE88_n7haU6yXiy6ffHtL22j6oXpvPrUwd4-zW1Rsa9IYRo/pub?output=csv&t=${Date.now()}`;

    readRemoteFile(url, {
      header: true,
      complete: (results) => {
        const data = results.data.map((row) => ({
          subject: row.Subject,
          professor: row.Professor,
          date: row.Date,
          time: row.Time,
          duration: row.Duration,
          room: row.Room,
          type: row.Type,
        }));
        setTimetable(data);
      },
    });
  }, [readRemoteFile]);

  const handleRegister = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen relative">
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
          Successfully registered for exams!
        </div>
      )}

      <div className="h-16"></div>

      <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
        Examination Information
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Access exam schedules, register for examinations, and download important documents.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {/* Examination Timetable */}
        <div className="col-span-2 bg-white border border-gray-200 rounded-xl shadow-sm p-5">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-gray-900">
            <Calendar className="w-6 h-6 text-blue-600" />
            <span>Examination Timetable</span>
          </h2>

          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-gray-500 text-sm uppercase tracking-wide">
                <th className="p-3">Subject</th>
                <th className="p-3">Date</th>
                <th className="p-3">Time</th>
                <th className="p-3">Room</th>
                <th className="p-3">Type</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {timetable.map((exam, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="p-3">
                    <div className="font-medium text-gray-900">{exam.subject}</div>
                    <div className="text-sm text-gray-500">{exam.professor}</div>
                  </td>
                  <td className="p-3 text-gray-500">{exam.date}</td>
                  <td className="p-3">
                    {exam.time}
                    <div className="text-xs text-gray-500">{exam.duration}</div>
                  </td>
                  <td className="p-3 flex items-center space-x-1 text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{exam.room}</span>
                  </td>
                  <td className="p-3">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                      {exam.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Exam Registration Form */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
          <h2 className="text-xl font-semibold mb-4 flex items-center space-x-2 text-gray-900">
            <User className="w-6 h-6 text-blue-600" />
            <span>Exam Registration</span>
          </h2>

          <form className="space-y-4" onSubmit={handleRegister}>
            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Student Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Student Email *
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* ID + Branch */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Student ID *
                </label>
                <input
                  type="text"
                  placeholder="Enter your student ID"
                  required
                  className="w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 text-gray-700">
                  Branch
                </label>
                <select className="w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Branch</option>
                  <option>CSE</option>
                  <option>CSE-DS</option>
                </select>
              </div>
            </div>

            {/* Program */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Program
              </label>
              <select className="w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select your program</option>
                <option>B.Tech</option>
                <option>M.Tech</option>
                <option>M.Sc</option>
              </select>
            </div>

            {/* Subjects */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Select Subjects
              </label>
              <div className="space-y-2 text-gray-900">
                {timetable.map((exam, i) => (
                  <label key={i} className="flex items-center space-x-2">
                    <input type="checkbox" className="custom-checkbox" />
                    <span>{`${exam.subject} (${exam.type})`}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition w-full"
            >
              Register for Exams
            </button>
          </form>
        </div>
      </div>

      {/* Registration Guidelines */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">
          Registration Guidelines
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
          <li>Registration must be completed before the deadline</li>
          <li>All fees must be paid before registration</li>
          <li>Students must have 75% minimum attendance</li>
          <li>Valid student ID is required for registration</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-500">
        Harineesha Nutakki | Roll No. 23XV1M0517 | CSE - 3rd Year Sem 1
      </footer>
    </div>
  );
}
