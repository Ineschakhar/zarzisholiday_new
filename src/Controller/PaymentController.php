<?php

namespace App\Controller;

use Stripe\Stripe;
use Knp\Snappy\Pdf;
use Stripe\PaymentIntent;
use Stripe\Exception\ApiErrorException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\Session;
use Knp\Bundle\SnappyBundle\Snappy\Response\PdfResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PaymentController extends AbstractController
{
    /**
     * @var Pdf
     */
    private $snappy;

    public function __construct(Pdf $snappy)
    {
        $this->snappy = $snappy;
    }

    /**
     * @Route("/payment", name="payment")
     * @return Response
     */
    public function payment(): Response
    {
        // dd('here');

        return $this->render('payment/card.html.twig', [
            'controller_name' => 'PaymentController',
        ]);
    }

    /**
     * @Route("/charger", name="charger")
     * @param Request $request
     * @param Session $session
     * @return Response
     * @throws ApiErrorException
     */
    public function charger(Request $request, Session $session)
    {
        $client_secret = null;
        $session = $session->get('data');

        $prix = (int) ($session['total']);

        if ($request->isMethod('get')) {
 
            \Stripe\Stripe::setApiKey('sk_test_51HOsV9JGU5M4MA7GtzELFfl5Z0nHjZk9h6NkZpWJqB0rfDmlJAf1RFan5jrulzRDShgwedLK6FGq2TVDYBi4dRQk00gcD9ogRS');
            $charge = \Stripe\PaymentIntent::create([
                'amount' => $prix*100,
                'currency' => 'eur',
                'description' => 'Example charge',
            ]);
            $client_secret = $charge->client_secret;
        }

        return $this->render('payment/card.html.twig', [

            'client_secret' => $client_secret,
            'prix' => $prix
        ]);
    }

    /**
     * @Route("/validation", name="validation")
     * @param Request $request
     * @return Response
     */
    public function validation(): Response
    {

        // $html =  $this->renderView('payment/validation.html.twig');

               return $this->render('payment/validation.html.twig', [
                   'controller_name' => 'PaymentController',
              ]);
    }

    /**
     * @Route("/download",name="download")
     */
     public function downloadPdf()
    {
 
        $html =  $this->renderView('payment/validation.html.twig');

        // convert la template twig au format  de pfd view

        // return new Response($this->snappy->getOutputFromHtml($html), 200, [
        //     'Content-Type' => 'application/pdf',
        //     'Content-Disposition' => 'inline; filename="Facture.pdf"'
        // ]);


        // genere la téléchargement de pdf file
       return new PdfResponse(
            $this->snappy->getOutputFromHtml($html), 'Facture.pdf'
        );

    }
    
    
    
    }
