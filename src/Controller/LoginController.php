<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class LoginController extends AbstractController
{
    /**
     * @Route("/login", name="login")
     * @param AuthenticationUtils $authenticationUtils
     * @return Response
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
            $user = $this->getUser(); // Get login User data
            if ($user->getRoles() == 'ROLE_ADMIN')
            return $this->redirectToRoute('dashboard');
            else
                return $this->redirectToRoute('home');
        }
        $lastUserName = $authenticationUtils->getLastUsername();
        $error = $authenticationUtils->getLastAuthenticationError();
//        dump($lastUserName);
//        dump($error);die;

        return $this->render('security/login.html.twig',array(
            'last_username'=> $lastUserName,
            'error'=> $error
        ));
    }
}
