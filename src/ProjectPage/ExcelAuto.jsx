export const ExcelAuto = () => {
    return (
        <div className="w-full p-8 flex flex-col justify-center items-center">
            <h1 className="lg:w-3/4 w-full text-xl font-semibold p-6 text-center">Excel Automation Program – Streamlining Data Updates with Python</h1>
            <div className="lg:w-3/4 w-full flex flex-col justify-center text-lg">
                <p className="pt-4 pb-4 text-justify">This custom built Excel automation tool, developed in Python, is designed to eliminate repetitive
                    manual work and ensure data is always fresh and ready for analysis. Leveraging powerful libraries
                    such as win32com, win10toast, and other Windows automation modules, the program interacts directly
                    with Excel at the application level, performing complex tasks in the background without requiring
                    user intervention.</p>
                <div className="flex flex-col lg:flex-row mt-4 mb-4 justify-center">
                    <div className="lg:w-1/2 w-full h-fit border-0 rounded-2xl overflow-hidden">
                    <video autoPlay loop muted>
                        <source src="/video/CircanaVideo1.mp4" type="video/mp4"/>
                    </video>
                    </div>

                    <div className="p-4 border-2 rounded-2xl border-blue-950 lg:w-1/2 w-full lg:ml-4 lg:mt-0 mt-4 text-justify h-fit">
                        <p>At its core, the program:
                            <ul className="list-disc p-5">
                                <li>Opens a specific Excel workbook and refreshes all queries and data connections to
                                    pull in the latest available data.
                                </li>
                                <li>Updates targeted date cells to ensure reports reflect the correct reporting
                                    period.
                                </li>
                                <li>Refreshes OLAP Pivot Tables across multiple worksheets, ensuring that every tab
                                    displays up-to-date aggregated data.
                                </li>
                            </ul>
                        </p>
                        <p>The program is flexible you can:
                            <ul className="list-disc p-5 text-justify">
                                <li>Run the process immediately with a single click.</li>
                                <li>Schedule the process to run automatically at a future time or on a recurring weekly
                                    basis.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="">
                    <p className="pb-4 pt-4">Thanks to its persistent scheduling feature, the program integrates seamlessly with Windows Task
                        Scheduler. This means that even if the program is closed or the computer is restarted the
                        scheduled tasks will still execute at the set time. When triggered, a background Python process
                        launches Excel, performs the entire update sequence silently, and closes Excel when
                        finished.</p>
                    <div className="border-2 border-blue-950 rounded-2xl flex justify-center overflow-hidden">
                        <video autoPlay loop muted>
                            <source src="/video/CircanaVideo2.mp4" type="video/mp4"/>
                        </video>
                    </div>
                    <p className="pt-4 pb-4">The user interface is designed with practicality in mind:
                        <ul className="list-disc p-5">
                            <li>An Information button provides step-by-step guidance on the program’s functions and
                                usage.
                            </li>
                            <li>A Schedule Viewer button displays all upcoming scheduled tasks and allows you to delete
                                them when no longer needed.
                            </li>
                        </ul>
                        This automation tool not only saves hours of manual effort but also ensures consistency,
                        accuracy, and timeliness freeing you to focus on <strong>interpreting insights rather than
                            managing spreadsheets.</strong>
                    </p>
                </div>
            </div>
            <hr className="w-3/4 mt-8 mb-8"/>
            <a href="https://github.com/Chidalgo007/excel-automation"
               className="flex items-center justify-center text-center">
                <strong>View Project on <br/>GitHub
                    <img src="/img/github-mark.svg" alt="GitHub Logo"
                         className="w-5 h-5 ml-2 inline" />
                </strong>
            </a>
        </div>
    );
};
export default ExcelAuto;