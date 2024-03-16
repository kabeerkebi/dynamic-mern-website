import express from "express";
import multer from "multer";
import { AboutModel } from "./models/about-model.js";
import { CursesModel } from "./models/courses-model.js";
import { HomeModel } from "./models/home-model.js";
import { port, mongodbURL } from "./connection.js";
import { Mongoaboutimage } from "./image-model/about-im.js";
import { Mongocoursesimage } from "./image-model/cours-im.js";
import { Mongohomeimage } from "./image-model/home-im.js";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { Mongohomeimage2 } from "./image-model/home-im2.js";
import { Mongocontactimage } from "./image-model/contact.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

////for image to serve
app.use(
  express.static(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "/images")
  )
);

//  about page

async function updateabout() {
  const aboutdetails = {
    type: "about",
    title: "Big Data-Hadoop| Best Data Science",
    subtitle: "Training in Kasaragod",
    paragraph:
      "Stack Technolab is a leading training institute in kasaragod offering  advanced IT courses such as Big Data, Data Science, Mean Stack,    Python,Grapic design and digital Marketing Testing training etc",
  };
  const isType = await AboutModel.findOne({ type: aboutdetails.type }).exec();
  if (!isType) {
    const saveaboutdata = new AboutModel(aboutdetails);
    saveaboutdata.save();
  }
}

app.get("/editabout", async (req, res) => {
  const response = await AboutModel.findOne({ type: "about" }).exec();
  const id = await Mongoaboutimage.find();
  res.status(200).json({ response, id });
});

updateabout();

app.put("/updateabout", async (req, res) => {
  const response = await AboutModel.findOneAndUpdate(
    { type: "about" },
    {
      title: req.body.title,
      subtitle: req.body.subtitle,
      paragraph: req.body.paragraph,
    }
  );
  res.status(200).json(response);
});

  /////////////////////////////    to stor image in about page   /////////////////////////////

  const storageabout = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./images");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, `${uniqueSuffix}_${file.originalname}`);
    },
  });

  const uploadabout = multer({ storage: storageabout });

  app.put(
    "/changeimage/:id",
    uploadabout.single("aboutimage"),
    async (req, res) => {
      if (req.file) {
        req.body["image"] = req.file.filename;
      }

      const response = await Mongoaboutimage.updateOne(
        {
          _id: new mongoose.mongo.ObjectId(req.params.id),
        },
        {
          $set: {
            image: req.body.image,
          },
        }
      );

      console.log(req.params.id);

      res.status(200).json({ success: true, data: response });
    }
  );

// courses page

const updatecourses = async () => {
  const coursesdetails = {
    type: "courses",
    title: "  Best Data Science ,Big  Data Course",
    subtitle: "Stack Technolab | kasaragod",
    paragraph:
      "  Stack Technolab No.1 Software Traning Institue Offers various Software Courses along with 100% Guaranteed Placementassistance. We provide Big Data Training, Data Science,python,Mean Stack Testing & many more",
    image: "image.not.found",
  };
  const isType = await CursesModel.findOne({
    type: coursesdetails.type,
  }).exec();
  if (!isType) {
    const newcourses = new CursesModel(coursesdetails);
    newcourses.save();
  }
};

app.get("/editcourses", async (req, res) => {
  const response = await CursesModel.findOne({ type: "courses" }).exec();
  const id = await Mongocoursesimage.find();
  res.status(200).json({ response, id });
});

updatecourses();

app.put("/updatecourses", async (req, res) => {
  const response = await CursesModel.findOneAndUpdate(
    { type: "courses" },

    {
      title: req.body.title,
      subtitle: req.body.subtitle,
      paragraph: req.body.paragraph,
    }
  );
  res.status(200).json(response);
});
/////////////////////////////    to stor image in corses page   /////////////////////////////

const storagecourses = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

const uploadcourses = multer({ storage: storagecourses });

app.put(
  "/changeimagecourses/:id",
  uploadcourses.single("coursesimage"),
  async (req, res) => {
    if (req.file) {
      req.body["image"] = req.file.filename;
    }

    const response = await Mongocoursesimage.updateOne(
      {
        _id: new mongoose.mongo.ObjectId(req.params.id),
      },
      {
        $set: {
          image: req.body.image,
        },
      }
    );

    console.log(req.params.id);

    res.status(200).json({ success: true, data: response });
  }
);
//  home page

const updatehome = async () => {
  const homeobject = {
    type: "home",
    title:
      "Transform Your Skills with Stack Technology Center Leaders in Tech Education",
    subtitle: "TO KNOW MORE",
    paragraph:
      "Welcome to Stack Institute, where knowledge meets innovation in the dynamic   world of Information Technology. Our institute is a hub of learning, collaboration,and technological advancement. With a commitment to excellence, we empower  minds and foster creativity, providing a transformative educational experience.  Explore our diverse range of courses, connect with industry experts, and embark  on a journey of discovery. Join us in shaping the future of technology and unleashing  the full potential of your skills. At Stack Institute, we believe in creating leaders, thinkers, and problem solvers for the digital age.",
    title2: "Welcome to Stack Technology Center",
    paragraph2:
      "At Stack Technology Centre, we are dedicated to shaping your future through practical training with live projects integrated. With our commitment to excellence and a wide range of certifications, you can trust us to help you achieve your career aspirations",
    skill1: "Skilled Instructor",
    skill2: "Online & Offline Classes",
    skill3: "Soft Skill Training ",
    skill4: "International Certificates",
    skill5: "100% Placement Assistance ",
    skill6: "Real-World Project Experience",
  };
  const istype = await HomeModel.findOne({ type: "home" }).exec();
  if (!istype) {
    const savehomedata = new HomeModel(homeobject);
    savehomedata.save();
  }
};
app.get("/edithome", async (req, res) => {
  const response = await HomeModel.findOne({ type: "home" }).exec();
  const id = await Mongohomeimage.find();
  const idd = await Mongohomeimage2.find();
  res.status(200).json({ response, id, idd });
});
updatehome();

app.put("/updatehome", async (req, res) => {
  const response = await HomeModel.findOneAndUpdate(
    { type: "home" },
    {
      title: req.body.title,
      subtitle: req.body.subtitle,
      paragraph: req.body.paragraph,
      paragraph2: req.body.paragraph2,
      title2: req.body.title2,
      skill1: req.body.skill1,
      skill2: req.body.skill2,
      skill3: req.body.skill3,
      skill4: req.body.skill4,
      skill5: req.body.skill5,
      skill6: req.body.skill6,
    }
  );
  res.status(200).json(response);
});
/////////////////////////////    to store image in home page   /////////////////////////////

const storagehome = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

const uploadhome = multer({ storage: storagecourses });

app.put("/changehome/:id", uploadhome.single("homeimage"), async (req, res) => {
  if (req.file) {
    req.body["image"] = req.file.filename;
  }

  const response = await Mongohomeimage.updateOne(
    {
      _id: new mongoose.mongo.ObjectId(req.params.id),
    },
    {
      $set: {
        image: req.body.image,
      },
    }
  );

  console.log(req.params.id);

  res.status(200).json({ success: true, data: response });
});

/////                         secound image saving for saving image on data base
app.put(
  "/changehome2/:id",
  uploadhome.single("homeimage"),
  async (req, res) => {
    if (req.file) {
      req.body["image"] = req.file.filename;
    }

    const response = await Mongohomeimage2.updateOne(
      {
        _id: new mongoose.mongo.ObjectId(req.params.id),
      },
      {
        $set: {
          image: req.body.image,
        },
      }
    );

    console.log(req.params.id);

    res.status(200).json({ success: true, data: response });
  }
);

/////                       contact page

app.put("/updatecontact", async (req, res) => {
  try {
    const contacts = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    };

    const data = await Mongocontactimage.create(contacts);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
  }
});

//                    to get the data
app.get("/getcontactdata", async (req, res) => {
  const response = await Mongocontactimage.find();
  res.json(response);
});
////                    to delete the data

app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const result = await Mongocontactimage.findByIdAndDelete(id);
  return res.status(200).send({ message: "Book deleted successfully" });
});

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("data base connected ");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log("server is connected ");
});
