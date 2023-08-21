let container = {
    eletype: "div",
    eleclsname: "container",
    children: [
        {
            eletype: "div",
            eleclsname: "container1",
            children:
                [
                    {
                        eletype: "div",
                        eleclsname: "cont1part1",
                        children: [
                            {
                                eleclsname: "banner",
                                eletype: "img",
                                src:"banner.jpg",
                            }
                        ]
                    },
                    {
                        eletype: "hr",
                        eleclsname: "hr",

                    },
                    {
                        eletype: "div",
                        eleclsname: "cont1part2",
                        children:
                            [
                                {
                                    eletype: "div",
                                    eleclsname: "part2phase1",
                                    children:
                                        [
                                            
                                            {
                                                eletype: "h4",
                                                textcontent1: "Hiring 13 Candidates in a month!",

                                            },
                                            {
                                                eletype: "p",
                                                textcontent1: "Focus on Your Mission While We Focus on Our HR.",
                                                eleclsname: "focusstyle"
                                            }
                                        ]
                                },
                                {
                                    eletype: "div",
                                    eleclsname: "part2phase2",
                                    children:
                                    [
                                        {
                                            eletype: "p",
                                            textcontent1: "In this human resources dashboard example, we can see a variety of key performance indicators for the HR department."
                                        },
                                    ]
                                }
                            ]
                    }
                ]
        },
        {
            eletype: "div",
            eleclsname: "container2"
        }
    ]


}

function create(Obj) {
    let ele = document.createElement(Obj.eletype);

    if (Obj.eleclsname) {
        ele.classList.add(Obj.eleclsname);
    }
    if (Obj.src) {
        ele.src = Obj.src;
    }
    if (Obj.textcontent1) {
        ele.innerHTML = Obj.textcontent1;
    }
    if (Obj.children) {
        Obj.children.forEach(item => {
            ele.appendChild(create(item));
        })
    }
   return ele;
}

let mainobj = create(container);
document.body.appendChild(mainobj);
