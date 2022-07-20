export default function Sample() {
  return (
    <div>
      <section className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <img src="https://images.unsplash.com/photo-1658130532685-55580a024906?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80.jpg" className="w-full h-full" />
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800">
                <h1>The King's Man</h1>
                <p className="my-2">9.0 Rating</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, nemo exercitationem repellendus aut sapiente unde nisi delectus? Commodi quas unde autem vero voluptas voluptatibus eligendi. Necessitatibus magni sequi quasi aspernatur.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
