export const ElectronHumby = () => {
    return (
        <div className="w-full p-8 flex flex-col justify-center items-center">
            <div className="lg:w-3/4 w-full flex flex-col items-center justify-center text-lg">
                <h1 className="lg:w-3/4 w-full text-xl font-semibold p-6 text-center">Automated Data Retrieval,
                    Processing & Integration</h1>
                <p className="pt-4 pb-4 text-justify">
                    <strong>Technology Stack</strong><br/>
                    The application is built with Electron and JavaScript for the user interface and web automation,
                    integrated seamlessly with Python for behind-the-scenes Excel file manipulation. This hybrid
                    approach
                    allows the program to combine browser-level automation with powerful backend data processing in a
                    single
                    executable package.
                    <br/>
                    This project is a fully automated three-step data processing workflow designed to streamline
                    repetitive
                    manual tasks and ensure timely updates to our Power BI dashboards.
                    <br/>
                    <br/>
                    <strong>Step 1 – Automated File Retrieval</strong><br/>
                    The program logs into a secure data server, navigates through the site’s interface, and
                    automatically
                    downloads a set of essential raw data files. This process eliminates the need for manual clicks,
                    reducing human error and saving significant time.
                </p>
                <video autoPlay loop muted className="border-2 border-blue-950 rounded-2xl flex justify-center overflow-hidden">
                    <source src="/video/Dunnhumby.mp4" type="video/mp4"/>
                </video>
                <p className="pt-4 pb-4">
                    <strong>Step 2 – File Upload and Remote Processing</strong><br/>
                    Once the raw data is locally processed and transformed, the program uploads it back to the server
                    for further remote processing. This step typically takes around three hours to complete. The
                    automation ensures that files are correctly formatted and submitted without user intervention.
                    <br/><br/>
                    <strong>Step 3 – Processed File Retrieval and Integration</strong><br/>
                    When the processed files are ready, the program downloads them automatically, unzips the package,
                    and places the data into the correct folder structure. This ensures the updated datasets are
                    immediately available for visualization in Power BI, providing stakeholders with up-to-date
                    insights.
                </p>
                <video autoPlay loop muted className="border-2 border-blue-950 rounded-2xl flex justify-center overflow-hidden">
                    <source src="/video/Dunnhumby2.mp4" type="video/mp4"/>
                </video>
                <p className="pt-4 pb-4">
                    By merging web navigation, file management, and data transformation into one cohesive tool, this
                    program transforms a tedious, multi-hour process into an efficient, hands-free pipeline freeing up
                    time for higher value tasks.
                </p>
                <hr className="w-3/4 mt-8 mb-8"/>
                <a href="https://github.com/brandon-moore/electron-humby"
                   className="flex items-center justify-center text-center">
                    <strong>View Project on <br/>GitHub
                        <img src="/img/github-mark.svg" alt="GitHub Logo"
                             className="w-5 h-5 ml-2 inline"/>
                    </strong>
                </a>
            </div>
        </div>
    );
};

export default ElectronHumby;