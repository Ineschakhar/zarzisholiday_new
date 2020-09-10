<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="home")
     */
    public function index()
    {
        if ($this->get('security.authorization_checker')->isGranted("ROLE_ADMIN") === TRUE) {
            // admin is logged in
            return $this->redirectToRoute("admin");
        }

        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    
}
