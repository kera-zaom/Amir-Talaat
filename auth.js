// js/auth.js

const loginForm =
    document.getElementById("loginForm");

const registerForm =
    document.getElementById("registerForm");


// ============================
// تسجيل حساب جديد
// ============================

registerForm?.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
        document.getElementById("fullName").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const parentPhone =
        document.getElementById("parentPhone").value.trim();

    const stage =
        document.getElementById("studyStage").value;

    const password =
        document.getElementById("registerPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (
        !name ||
        !email ||
        !phone ||
        !parentPhone ||
        !stage ||
        !password ||
        !confirmPassword
    ) {

        alert("من فضلك أكمل جميع البيانات");
        return;
    }


    if (password !== confirmPassword) {

        alert("كلمتا المرور غير متطابقتين");
        return;
    }


    const button =
        registerForm.querySelector("button");

    button.disabled = true;
    button.textContent = "جاري إنشاء الحساب...";


    try {

        const { data, error } =
            await supabaseClient.auth.signUp({

                email: email,

                password: password,

                options: {

                    data: {

                        full_name: name,

                        phone: phone,

                        parent_phone: parentPhone,

                        study_stage: stage

                    }

                }

            });


        if (error) {
            throw error;
        }


        alert(
            "تم إنشاء الحساب بنجاح 🎉"
        );


        window.location.href =
            "home.html";


    } catch (error) {

        console.error(error);

        alert(
            error.message ||
            "حدث خطأ أثناء إنشاء الحساب"
        );

    } finally {

        button.disabled = false;

        button.textContent =
            "إنشاء الحساب";

    }

});


// ============================
// تسجيل الدخول
// ============================

loginForm?.addEventListener("submit", async (e) => {

    e.preventDefault();


    const email =
        document
        .getElementById("loginEmail")
        .value
        .trim();


    const password =
        document
        .getElementById("loginPassword")
        .value;


    if (!email || !password) {

        alert(
            "اكتب البريد الإلكتروني وكلمة المرور"
        );

        return;
    }


    const button =
        loginForm.querySelector("button");

    button.disabled = true;

    button.textContent =
        "جاري الدخول...";


    try {

        const { data, error } =
            await supabaseClient.auth.signInWithPassword({

                email: email,

                password: password

            });


        if (error) {
            throw error;
        }


        window.location.href =
            "home.html";


    } catch (error) {

        console.error(error);

        alert(
            "بيانات الدخول غير صحيحة"
        );

    } finally {

        button.disabled = false;

        button.textContent =
            "دخول";

    }

});