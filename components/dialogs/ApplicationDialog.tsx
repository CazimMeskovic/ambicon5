
 'use client' 
import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";
import * as yup from "yup";
import { useSearchParams, usePathname } from 'next/navigation';
import "./dialogos.css"

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  subject: string;
}

const ApplicationDialog: FC<Props> = ({ isOpen, setIsOpen, subject }) => {
  const [error, setError] = useState(false);
  const t = useTranslations('AllPage');

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1000,
      border: "none",
      maxWidth: "700px",
      padding: "0",
      backgroundColor: "transparent",
    },
    overlay: {
      zIndex: 10,
    },
  };
  const pathname = usePathname();
  const searchParams = useSearchParams();


  const currentLocale = pathname.split('/')[1] || 'en';

  const closeModal = () => {
    setIsOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telefon: "",
      message: "",
      linkedin: "",
      xing: "",
    },
    validationSchema: yup.object({
      email: yup.string().email("Ungültige E-Mail-Adresse").required("E-Mail ist erforderlich"),
      name: yup.string().required("Vor- und Nahcname ist erforderlich"),
      telefon: yup.string().required("Telefon ist erforderlich"),
      message: yup.string().required("Nachricht ist erforderlich"),
    }),
    onSubmit: async (values) => {
      const body = { ...values, subject };
      try {
        const response = await fetch("/api/application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        if (response.ok) {
          toast.success(t("application_form_success"));
          setError(false);
          formik.resetForm();
        } else {
          setError(true);
        }
      } catch (e) {
        setError(true);
      }
    },
  });

  const getErrorMessage = (field: "name" | "email" | "message" | "telefon") => {
    return formik.touched[field] && Boolean(formik.errors[field]) ? (
      <div className="text-red-500">{formik.errors[field]}</div>
    ) : null;
  };

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <section className=" section-box">
          <div className="application-dialog-container">
            <div className="mb-12">
              <span className="uppercase text-gray-500">Bewerben</span>
              <h2 className="text-3xl text-gray-900 mt-2">Deine Bewerbung - {subject}</h2>
              <p className="text-gray-600 mt-5">
                Wir freuen uns über Dein Interesse an ambiCON GmbH. Bitte fülle das folgende kurze Formular aus.
              </p>
            </div>
            <div>
              <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="form-group">
                    <input className="form-control"
                   
                      placeholder="Vor- und Nachname"
                      {...formik.getFieldProps("name")}
                    />
                    {getErrorMessage("name")}
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <input className="form-control"
                  
                      placeholder="Email"
                      {...formik.getFieldProps("email")}
                    />
                    {getErrorMessage("email")}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="form-group">
                    <input className="form-control"
                  
                      placeholder="Telefon"
                      {...formik.getFieldProps("telefon")}
                    />
                    {getErrorMessage("telefon")}
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <input className="form-control"
                    
                      placeholder="LinkedIn Profile Link (optional)"
                      {...formik.getFieldProps("linkedin")}
                    />
                  </div>
                </div>
                <div>
                  <div className="form-group">
                    <input className="form-control"
                  
                      placeholder="XING Profile Link (optional)"
                      {...formik.getFieldProps("xing")}
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="form-group">
                    <textarea className="form-control"
                  
                      placeholder="Nachricht"
                      {...formik.getFieldProps("message")}
                    />
                    {getErrorMessage("message")}
                  </div>
                </div>
                <div className="md:col-span-2 mt-4">
                  <button
                  className="btn btn-black icon-arrow-right-white px-5 py-5 lg:py-6 mr-40 mb-20"
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    Bewerbung senden
                  </button>
                  {error && <div className="text-red-500 mt-3">{t("application_form_error")}</div>}
                </div>
                <span className="text-gray-500 mt-[-15%] md:col-span-2">
                  Indem Du auf die Schaltfläche „Bewerbung senden“ klickst, stimmst Du unseren{" "}
                  <Link 
                  href = {`/${currentLocale}/datenschutzerklaerung`}
                    className="text-blue-500 underline">Datenschutzerklärung
                  </Link>{" "}
                  zu.
                </span>
              </form>
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default ApplicationDialog;


